"use client";

import { useState, useEffect, useCallback } from "react";
import { db, storage } from "@/utils/config/db/firebase";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import {
  IoPencilOutline,
  IoTrashBinOutline,
  IoAddOutline,
} from "react-icons/io5";
import Form from "@/components/Atoms/Form";
import { Input } from "@/components/Atoms/Input";
import { Textarea } from "@/components/Atoms/Textarea";
import { InputFile } from "@/components/Atoms/InputFile";
import Image from "next/image";
import { Spinner } from "@/components/Atoms/Spinner";
import {
  deleteObject,
  getDownloadURL,
  ref as storageRef,
  uploadBytesResumable,
} from "firebase/storage";

type ProjectProps = {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
};

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [idProject, setIdProject] = useState("");
  const [image, setImage] = useState<File>();
  const [imageURL, setImageURL] = useState<string | undefined>("");
  const [isLoading, setIsLoading] = useState(false);
  const [percent, setPercent] = useState(0);
  const [projects, setProjects] = useState<ProjectProps[]>([]);

  const handleModal = useCallback(() => {
    setShowModal((prevShowModal) => !prevShowModal);
    if (showModal) {
      setEditTitle("");
      setEditDescription("");
      setIdProject("");
      setImage(undefined);
    }
  }, [showModal]);

  const handleOutsideClick = useCallback((event: MouseEvent) => {
    const modal = document.querySelector(".modal");
    if (modal && !modal.contains(event.target as Node)) {
      setShowModal(false);
    }
  }, []);

  const handleEscKey = useCallback((event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setShowModal(false);
    }
  }, []);

  const handleEditClick = useCallback(
    (
      title: string,
      description: string,
      id: string,
      image: string | undefined
    ) => {
      setEditTitle(title);
      setEditDescription(description);
      setIdProject(id);
      setImageURL(image);
      setShowModal(true);
    },
    []
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [handleOutsideClick, handleEscKey]);

  useEffect(() => {
    const getProjects = async () => {
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

      setProjects(projectsData);
    };

    getProjects();
  }, []);

  const onSubmit = async (data: ProjectProps) => {
    setIsLoading(true);
    try {
      if (data.id !== "") {
        if (image) {
          const imageRef = storageRef(storage, `projects/${data.id}`);
          const uploadTask = uploadBytesResumable(imageRef, image as File);

          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const percent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              setPercent(percent);
            },
            (err) => console.log(err)
          );
        }

        await updateDoc(doc(db, "projects", data.id), {
          title: data.title,
          description: data.description,
        });
      } else {
        const response = await addDoc(collection(db, "projects"), {
          title: data.title,
          description: data.description,
        });
        if (image) {
          const imageRef = storageRef(storage, `projects/${response.id}`);
          const uploadTask = uploadBytesResumable(imageRef, image as File);

          uploadTask.on(
            "state_changed",
            (snapshot) => {
              const percent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
              );
              setPercent(percent);
            },
            (err) => console.log(err)
          );
        }
      }

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

      setProjects(projectsData);

      setIsLoading(false);
      handleModal();
    } catch (error: any) {
      setIsLoading(false);
      handleModal();
    }
  };

  return (
    <div className="flex justify-center h-full items-center p-3">
      <div className="flex bg-white p-6 rounded-xl flex-col drop-shadow-2xl h-auto">
        <div className="flex flex-row justify-between items-center mb-3">
          <span className="text-3xl font-bold">Projetos</span>
          <button
            className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-md p-2.5 cursor-pointer"
            type="button"
            onClick={handleModal}
          >
            <span className="text-md font-semibold">Adicionar</span>
            <IoAddOutline className="w-7 h-7" />
          </button>
        </div>
        <div className="w-full border-b bg-gray-500 mb-4"></div>
        {projects.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <span className="text-xl font-semibold mb-4">
              <Spinner color="emerald" />
            </span>
          </div>
        ) : (
          projects.map((item: ProjectProps, index: number) => (
            <div key={index}>
              <div className="flex justify-between items-center flex-col sm:flex-row">
                <div className="flex flex-row">
                  <Image
                    src={item.imageUrl as string}
                    alt="Imagem do projeto"
                    className="h-12 w-12 rounded-full bg-gray-300 bg-center"
                    width={300}
                    height={300}
                  />
                  <div className="flex flex-col ml-4 mr-4 mb-4">
                    <span className="text-xl font-bold">{item.title}</span>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
                <div className="flex flex-row gap-4">
                  <button
                    type="button"
                    onClick={() =>
                      handleEditClick(
                        item.title,
                        item.description,
                        item.id,
                        item?.imageUrl
                      )
                    }
                  >
                    <IoPencilOutline className="bg-gradient-to-r from-sky-500 to-blue-500 w-10 h-10 text-white rounded-md p-2.5 cursor-pointer" />
                  </button>
                  <IoTrashBinOutline className="bg-gradient-to-r from-red-500 to-orange-500 w-10 h-10 text-white rounded-md p-2.5 cursor-pointer" />
                </div>
              </div>
              <div className="w-full border-b bg-gray-500 mb-4"></div>
            </div>
          ))
        )}
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="bg-white p-6 rounded-xl z-10 w-96">
            <h2 className="text-2xl font-bold mb-4">Adicionar Projeto</h2>
            <div className="w-full border-b bg-gray-500 mb-4"></div>
            <Form
              onSubmit={(data: ProjectProps) =>
                onSubmit({ ...data, id: idProject })
              }
            >
              <Input
                label="Titulo"
                placeholder="Husky"
                name="title"
                type="text"
                className="mt-4"
                defaultValue={editTitle}
              />
              <Textarea
                label="Descrição"
                placeholder="Esse projeto vai ser o melhor app de finanças do mundo!"
                name="description"
                className="mt-4"
                defaultValue={editDescription}
              />
              <InputFile
                name="image"
                onChange={(e) => {
                  if (e.target.files) {
                    setImage(e.target.files[0]);
                  }
                }}
              />
              <div className="flex flex-row gap-4 mt-4 justify-between">
                <button
                  className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-md p-2.5"
                  type="submit"
                  disabled={isLoading}
                >
                  <span className="text-md font-semibold">
                    {isLoading ? (
                      <Spinner color="emerald" />
                    ) : editTitle || editDescription ? (
                      "Atualizar"
                    ) : (
                      "Cadastrar"
                    )}
                  </span>
                </button>
                <button
                  className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-orange-500 text-white rounded-md p-2.5 cursor-pointer"
                  type="button"
                  onClick={handleModal}
                >
                  <span className="text-md font-semibold">Fechar</span>
                </button>
              </div>
            </Form>
            {editTitle && editDescription && !image && (
              <div className="flex flex-col items-center mt-4">
                <span className="text-md font-semibold">Imagem do projeto</span>
                <Image
                  src={imageURL as string}
                  alt="Imagem do projeto"
                  className="object-cover rounded-md mt-2"
                  width={128}
                  height={64}
                />
              </div>
            )}
            {image && (
              <div className="flex flex-col items-center mt-4">
                <span className="text-md font-semibold">Imagem do projeto</span>
                <Image
                  src={URL.createObjectURL(image)}
                  alt="Imagem do projeto"
                  className="object-cover rounded-md mt-2"
                  width={128}
                  height={64}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
