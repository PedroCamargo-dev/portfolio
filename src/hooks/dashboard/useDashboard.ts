import { getProjects } from "@/services/dashboard";
import { createProject } from "@/services/dashboard/createProject";
import { useCallback, useEffect, useState } from "react";

export const useDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");
  const [idProject, setIdProject] = useState("");
  const [image, setImage] = useState<File>();
  const [imageURL, setImageURL] = useState<string | undefined>("");
  const [isLoading, setIsLoading] = useState(false);
  const [projects, setProjects] = useState([]);

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

  useEffect(() => {
    const getAllProjects = async () => {
      const response = await getProjects();
      setProjects(response.content);
    };

    getAllProjects();
  }, []);

  const onSubmitRegister = async (data) => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("image", image as File);

      const response = await createProject(formData);
      if (response) {
        const projects = await getProjects();
        setProjects(projects.content);
      }
      setShowModal(false);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const onSubmitUpdate = (data) => {
    console.log(data);
  };

  return {
    handleModal,
    handleEditClick,
    handleUploadImage,
    onSubmitRegister,
    onSubmitUpdate,
    isLoading,
    projects,
    showModal,
    editTitle,
    editDescription,
    imageURL,
    image,
  };
};
