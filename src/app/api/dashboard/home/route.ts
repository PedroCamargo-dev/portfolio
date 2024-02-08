import { STATUS_CODE } from "@/constants";
import { IProjectProps } from "@/interface/IProjectProps";
import { db, storage } from "@/utils/config/db/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const querySnapshot = await getDocs(collection(db, "projects"));
    const projectsData: IProjectProps[] = [];

    await Promise.all(
      querySnapshot.docs.map(async (doc) => {
        const projectData = { id: doc.id, ...doc.data() } as IProjectProps;
        const imageRef = storageRef(storage, `projects/${doc.id}`);
        const imageUrl = await getDownloadURL(imageRef);
        projectData.imageUrl = imageUrl;
        projectsData.push(projectData);
      })
    );

    if (projectsData.length > 0) {
      return NextResponse.json(
        {
          content: projectsData,
        },
        { status: STATUS_CODE.OK }
      );
    } else {
      return NextResponse.json(
        {
          content: { message: "Nenhum projeto encontrado" },
        },
        { status: STATUS_CODE.OK }
      );
    }
  } catch (error: any) {
    return NextResponse.json(
      {
        content: { message: "Erro ao buscar projetos" },
      },
      { status: STATUS_CODE.INTERNAL_SERVER_ERROR }
    );
  }
}

export async function POST(req: NextRequest) {
  const formData = await req.formData();

  if (
    !formData.get("image") ||
    !formData.get("title") ||
    !formData.get("description")
  ) {
    return NextResponse.json(
      {
        message: "Preencha todos os campos",
      },
      { status: STATUS_CODE.BAD_REQUEST }
    );
  }

  try {
    const response = await addDoc(collection(db, "projects"), {
      title: formData.get("title"),
      description: formData.get("description"),
    });

    const imageRef = storageRef(storage, `projects/${response.id}`);
    const uploadTask = await uploadBytes(
      imageRef,
      formData.get("image") as File
    );

    if (uploadTask) {
      const url = await getDownloadURL(imageRef);
      return NextResponse.json(
        {
          message: "Projeto criado com sucesso",
          url,
        },
        { status: STATUS_CODE.CREATED }
      );
    }
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Erro ao criar projeto",
      },
      { status: STATUS_CODE.INTERNAL_SERVER_ERROR }
    );
  }
}

export async function PATCH(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id") as string;
  const formData = await req.formData();
  let url = "";

  if (!id) {
    return NextResponse.json(
      {
        message: "Projeto não encontrado",
      },
      { status: STATUS_CODE.NOT_FOUND }
    );
  }

  if (!formData.get("title") || !formData.get("description")) {
    return NextResponse.json(
      {
        message: "Preencha todos os campos",
      },
      { status: STATUS_CODE.BAD_REQUEST }
    );
  }

  try {
    await updateDoc(doc(db, "projects", id), {
      title: formData.get("title"),
      description: formData.get("description"),
    });

    if (formData.get("image") !== null) {
      const imageRef = storageRef(storage, `projects/${id}`);
      const uploadTask = await uploadBytes(
        imageRef,
        formData.get("image") as File
      );

      if (uploadTask) {
        url = await getDownloadURL(imageRef);
      }
    }
    return NextResponse.json(
      {
        message: url
          ? "Projeto completo atualizado com sucesso"
          : "Projeto atualizado com sucesso, sem alteração de imagem",
        url: url ? url : "",
      },
      { status: STATUS_CODE.OK }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Erro ao atualizar projeto",
      },
      { status: STATUS_CODE.INTERNAL_SERVER_ERROR }
    );
  }
}

export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id") as string;

  if (!id) {
    return NextResponse.json(
      {
        message: "Projeto não encontrado",
      },
      { status: STATUS_CODE.NOT_FOUND }
    );
  }

  try {
    const delDoc = await DeleteProject(id);

    if (!delDoc) {
      return NextResponse.json(
        {
          message: "Erro ao deletar projeto",
        },
        { status: STATUS_CODE.INTERNAL_SERVER_ERROR }
      );
    }

    if (delDoc) {
      const imageRef = storageRef(storage, `projects/${id}`);
      await deleteObject(imageRef);
    }

    return NextResponse.json(
      {
        message: "Projeto deletado com sucesso",
      },
      { status: STATUS_CODE.OK }
    );
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Erro ao deletar projeto",
      },
      { status: STATUS_CODE.INTERNAL_SERVER_ERROR }
    );
  }
}

async function DeleteProject(id: string): Promise<boolean> {
  try {
    await deleteDoc(doc(db, "projects", id));
    return true;
  } catch (error: any) {
    return false;
  }
}
