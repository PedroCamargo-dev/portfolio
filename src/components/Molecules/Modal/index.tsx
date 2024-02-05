import { FC, ReactNode } from "react";

interface ModalProps {
  title: string;
  children: ReactNode;
  showModal: boolean;
}

export const Modal: FC<ModalProps> = ({ title, children, showModal }) => {
  return (
    <>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div className="bg-white p-6 rounded-xl z-10 w-96 modal">
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <div className="w-full border-b bg-gray-500 mb-4"></div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
