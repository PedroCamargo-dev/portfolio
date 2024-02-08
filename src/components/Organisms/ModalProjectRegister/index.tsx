import Form from "@/components/Atoms/Form";
import { Input } from "@/components/Atoms/Input";
import { InputFile } from "@/components/Atoms/InputFile";
import { Spinner } from "@/components/Atoms/Spinner";
import { Textarea } from "@/components/Atoms/Textarea";
import { Modal } from "@/components/Molecules/Modal";
import { IData } from "@/interface/IData";
import Image from "next/image";
import { FC, FormEvent } from "react";

interface ModalProjectRegisterProps {
  onSubmit: (data: IData) => void;
  handleUploadImage: (file: File) => void;
  isLoading: boolean;
  handleModal: () => void;
  image: File | undefined;
  showModal: boolean;
}

export const ModalProjectRegister: FC<ModalProjectRegisterProps> = ({
  onSubmit,
  handleUploadImage,
  isLoading,
  handleModal,
  image,
  showModal,
}) => {
  return (
    <Modal title="Adicionar projeto" showModal={showModal}>
      <Form onSubmit={onSubmit}>
        <Input
          label="Titulo"
          placeholder="Husky"
          name="title"
          type="text"
          className="mt-4"
        />
        <Textarea
          label="Descrição"
          placeholder="Esse projeto vai ser o melhor app de finanças do mundo!"
          name="description"
          className="mt-4"
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
              {isLoading ? <Spinner color="emerald" /> : "Cadastrar"}
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
    </Modal>
  );
};
