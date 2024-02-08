import { Spinner } from "@/components/Atoms/Spinner";
import { ModalProjectDelete } from "@/components/Organisms/ModalProjectDelete";
import { ModalProjectRegister } from "@/components/Organisms/ModalProjectRegister";
import { ModalProjectUpdate } from "@/components/Organisms/ModalProjectUpdate";
import { IData } from "@/interface/IData";
import { IProjectProps } from "@/interface/IProjectProps";
import Image from "next/image";
import { FC, FormEvent } from "react";
import {
  IoAddOutline,
  IoPencilOutline,
  IoTrashBinOutline,
} from "react-icons/io5";

interface ProjectProps {
  handleModal: () => void;
  handleEditClick: (
    title: string,
    description: string,
    id: string,
    imageUrl: string | undefined
  ) => void;
  handleDelete: (id: string, title: string) => void;
  projects: IProjectProps[] & { message?: string };
  isLoading: boolean;
  isDelete: boolean;
  onSubmitRegister: (data: IData) => void;
  onSubmitUpdate: (data: IData) => void;
  onSubmitDelete: () => void;
  handleUploadImage: (file: File) => void;
  editTitle: string;
  editDescription: string;
  imageURL: string | undefined;
  image: File | undefined;
  showModal: boolean;
}

export const DashboardHome: FC<ProjectProps> = ({
  handleModal,
  handleEditClick,
  handleDelete,
  projects,
  isLoading,
  isDelete,
  onSubmitRegister,
  onSubmitUpdate,
  onSubmitDelete,
  handleUploadImage,
  editTitle,
  editDescription,
  imageURL,
  image,
  showModal,
}) => {
  return (
    <>
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
            <>
              {projects.length > 0 ? (
                projects.map((item: IProjectProps, index: number) => (
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
                          <span className="text-xl font-bold">
                            {item.title}
                          </span>
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
                        <button
                          type="button"
                          onClick={() => handleDelete(item.id, item.title)}
                        >
                          <IoTrashBinOutline className="bg-gradient-to-r from-red-500 to-orange-500 w-10 h-10 text-white rounded-md p-2.5 cursor-pointer" />
                        </button>
                      </div>
                    </div>
                    <div className="w-full border-b bg-gray-500 mb-4"></div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center">
                  <span className="text-xl font-semibold">
                    {projects.message}
                  </span>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      {!isDelete && (
        <ModalProjectRegister
          onSubmit={onSubmitRegister}
          handleUploadImage={handleUploadImage}
          isLoading={isLoading}
          handleModal={handleModal}
          image={image}
          showModal={showModal}
        />
      )}
      {editTitle && editDescription && !image && (
        <ModalProjectUpdate
          onSubmit={onSubmitUpdate}
          editTitle={editTitle}
          editDescription={editDescription}
          handleUploadImage={handleUploadImage}
          isLoading={isLoading}
          handleModal={handleModal}
          image={image}
          imageURL={imageURL}
          showModal={showModal}
        />
      )}
      {isDelete && (
        <ModalProjectDelete
          onHandleDelete={onSubmitDelete}
          isLoading={isLoading}
          titleProject={editTitle}
          handleModal={handleModal}
          showModal={showModal}
        />
      )}
    </>
  );
};
