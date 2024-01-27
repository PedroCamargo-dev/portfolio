"use client";

import Form from "@/components/Atoms/Form";
import { Input } from "@/components/Atoms/Input";
import { Textarea } from "@/components/Atoms/Textarea";
import { useCallback, useState, useEffect } from "react";
import {
  IoPencilOutline,
  IoTrashBinOutline,
  IoAddOutline,
} from "react-icons/io5";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const handleModal = useCallback(() => {
    setShowModal(!showModal);
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

  const handleEditClick = useCallback((title: string, description: string) => {
    setEditTitle(title);
    setEditDescription(description);
    // Perform any other logic you need when the edit button is clicked
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [handleOutsideClick, handleEscKey]);

  const projects = [
    {
      id: 1,
      title: "Husky1",
      description: "Esse projeto vai ser o melhor app de finanças do mundo!",
    },
    {
      id: 2,
      title: "Husky2",
      description: "Esse projeto vai ser o melhor app de finanças do mundo!",
    },
    {
      id: 3,
      title: "Husky3",
      description: "Esse projeto vai ser o melhor app de finanças do mundo!",
    },
    {
      id: 1,
      title: "Husky4",
      description: "Esse projeto vai ser o melhor app de finanças do mundo!",
    },
    {
      id: 2,
      title: "Husk5",
      description: "Esse projeto vai ser o melhor app de finanças do mundo!",
    },
  ];

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
        {projects.map((item, index) => (
          <div key={index}>
            <div className="flex justify-evenly items-center flex-col sm:flex-row">
              <div className="flex flex-row">
                <div className="h-12 w-12 rounded-full bg-gray-300"></div>
                <div className="flex flex-col ml-4 mr-4 mb-4">
                  <span className="text-xl font-bold">{item.title}</span>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              </div>
              <div className="flex flex-row gap-4">
                <button
                  type="button"
                  onClick={() => {
                    handleEditClick(item.title, item.description);
                    handleModal();
                  }}
                >
                  <IoPencilOutline className="bg-gradient-to-r from-sky-500 to-blue-500 w-10 h-10 text-white rounded-md p-2.5 cursor-pointer" />
                </button>
                <IoTrashBinOutline className="bg-gradient-to-r from-red-500 to-orange-500 w-10 h-10 text-white rounded-md p-2.5 cursor-pointer" />
              </div>
            </div>
            {index !== 14 && (
              <div className="w-full border-b bg-gray-500 mb-4"></div>
            )}
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="bg-white p-6 rounded-xl z-10 w-96 modal">
            <h2 className="text-2xl font-bold mb-4">Adicionar Projeto</h2>
            <div className="w-full border-b bg-gray-500 mb-4"></div>
            <Form
              onSubmit={(data) => {
                console.log(data);
              }}
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
              <div className="flex flex-row gap-4 mt-4 justify-between">
                <button className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-md p-2.5">
                  <span className="text-md font-semibold">Cadastrar</span>
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
          </div>
        </div>
      )}
    </div>
  );
}
