import { useCallback, useEffect } from "react";

interface ActionsProps {
  [key: string]: () => void;
}

export const useActions = (actions: ActionsProps) => {
  const handleEscKey = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape" && actions.handleModal) {
        actions.handleModal();
      }
    },
    [actions]
  );

  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      const modal = document.querySelector(".modal");
      if (
        modal &&
        !modal.contains(event.target as Node) &&
        actions.handleModal
      ) {
        actions.handleModal();
      }
    },
    [actions]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscKey);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [handleOutsideClick, handleEscKey]);
};
