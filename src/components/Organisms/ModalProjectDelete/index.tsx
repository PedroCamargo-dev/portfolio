import { Spinner } from "@/components/Atoms/Spinner";
import { Modal } from "@/components/Molecules/Modal";
import { FC } from "react";

interface ModalProjectDeleteProps {
  onHandleDelete: () => void;
  isLoading: boolean;
  titleProject: string;
  handleModal: () => void;
  showModal: boolean;
}

export const ModalProjectDelete: FC<ModalProjectDeleteProps> = ({
  onHandleDelete,
  isLoading,
  titleProject,
  handleModal,
  showModal,
}) => {
  return (
    <Modal title={`Deletar projeto - ${titleProject}`} showModal={showModal}>
      <div className="flex flex-row gap-4 mt-4 justify-between">
        <button
          className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-md p-2.5"
          type="submit"
          disabled={isLoading}
          onClick={onHandleDelete}
        >
          <span className="text-md font-semibold">
            {isLoading ? <Spinner color="emerald" /> : "Deletar"}
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
    </Modal>
  );
};
