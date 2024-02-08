import Form from "@/components/Atoms/Form";
import { Input } from "@/components/Atoms/Input";
import { InputFile } from "@/components/Atoms/InputFile";
import { Spinner } from "@/components/Atoms/Spinner";
import { Textarea } from "@/components/Atoms/Textarea";
import { Modal } from "@/components/Molecules/Modal";
import { IData } from "@/interface/IData";
import Image from "next/image";
import { FC } from "react";

interface ModalProjectUpdateProps {
  onSubmit: (data: IData) => void;
  editTitle: string;
  editDescription: string;
  handleUploadImage: (file: File) => void;
  isLoading: boolean;
  handleModal: () => void;
  image: File | undefined;
  imageURL: string | undefined;
  showModal: boolean;
}

export const ModalProjectUpdate: FC<ModalProjectUpdateProps> = ({
  onSubmit,
  editTitle,
  editDescription,
  handleUploadImage,
  isLoading,
  handleModal,
  image,
  imageURL,
  showModal,
}) => {
  return (
    <Modal title="Atualizar projeto" showModal={showModal}>
      <Form onSubmit={onSubmit}>
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
              handleUploadImage(e.target.files[0]);
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
              {isLoading ? <Spinner color="emerald" /> : "Atualizar projeto"}
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
    </Modal>
  );
};
