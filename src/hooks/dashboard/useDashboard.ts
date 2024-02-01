import { useCallback, useState } from "react";

export const useDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [idProject, setIdProject] = useState("");
  const [image, setImage] = useState<File>();
  const [imageURL, setImageURL] = useState<string | undefined>("");
  const [isLoading, setIsLoading] = useState(false);
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

  const handleUploadImage = (image: File) => {
    setImage(image);
  };

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

  return {
    handleModal,
    handleEditClick,
    handleUploadImage,
    isLoading,
    projects,
    showModal,
    editTitle,
    editDescription,
    imageURL,
    image,
  };
};
