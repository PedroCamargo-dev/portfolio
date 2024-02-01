import { STATUS_CODE } from "@/constants";
import { db, storage } from "@/utils/config/db/firebase";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import {
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const querySnapshot = await getDocs(collection(db, "projects"));
    const projectsData: ProjectProps[] = [];

    await Promise.all(
      querySnapshot.docs.map(async (doc) => {
        const projectData = { id: doc.id, ...doc.data() } as ProjectProps;
        const imageRef = storageRef(storage, `projects/${doc.id}`);
        const imageUrl = await getDownloadURL(imageRef);
        projectData.imageUrl = imageUrl;
        projectsData.push(projectData);
      })
    );

    if (projectsData.length > 0) {
      return NextResponse.json(
        {
          projects: projectsData,
        },
        { status: STATUS_CODE.OK }
      );
    } else {
      return NextResponse.json(
        {
          message: "Nenhum projeto encontrado",
        },
        { status: STATUS_CODE.OK }
      );
    }
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Erro ao buscar projetos",
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

  if (
    !id ||
    !formData.get("title") ||
    !formData.get("description") ||
    !formData.get("image")
  ) {
    return NextResponse.json(
      {
        message: "Preencha todos os campos",
      },
      { status: STATUS_CODE.BAD_REQUEST }
    );
  }

  try {
    const imageRef = storageRef(storage, `projects/${id}`);
    const uploadTask = await uploadBytes(
      imageRef,
      formData.get("image") as File
    );

    if (uploadTask) {
      const url = await getDownloadURL(imageRef);
      await updateDoc(doc(db, "projects", id), {
        title: formData.get("title"),
        description: formData.get("description"),
      });

      return NextResponse.json(
        {
          message: "Projeto atualizado com sucesso",
          url,
        },
        { status: STATUS_CODE.OK }
      );
    }
  } catch (error: any) {
    return NextResponse.json(
      {
        message: "Erro ao atualizar projeto",
      },
      { status: STATUS_CODE.INTERNAL_SERVER_ERROR }
    );
  }
}
