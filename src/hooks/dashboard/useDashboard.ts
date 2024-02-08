import { IData } from "@/interface/IData";
import { getProjects } from "@/services/dashboard";
import { createProject } from "@/services/dashboard/createProject";
import { deleteProject } from "@/services/dashboard/deleteProject";
import { updateProject } from "@/services/dashboard/updateProject";
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
  const [isDelete, setIsDelete] = useState(false);

  const handleModal = useCallback(() => {
    setShowModal((prevShowModal) => !prevShowModal);
    if (showModal) {
      setEditTitle("");
      setEditDescription("");
      setIdProject("");
      setImage(undefined);
      setIsDelete(false);
    }
  }, [showModal]);

  const handleUploadImage = (image: File) => {
    setImage(image);
  };

  const handleDelete = useCallback((id: string, title: string) => {
    setIdProject(id);
    setEditTitle(title);
    setIsDelete(true);
    setShowModal(true);
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

  const getAllProjects = useCallback(async () => {
    const response = await getProjects();
    setProjects(response.content);
  }, []);

  useEffect(() => {
    getAllProjects();
  }, [getAllProjects]);

  const onSubmitRegister = async (data: IData) => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("image", image as File);

      const response = await createProject(formData);
      if (response) {
        getAllProjects();
      }
      setShowModal(false);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const onSubmitUpdate = async (data: IData) => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      if (image) {
        formData.append("image", image);
      }

      const response = await updateProject(formData, idProject);
      if (response) {
        getAllProjects();
      }
      setShowModal(false);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const onSubmitDelete = async () => {
    setIsLoading(true);
    try {
      const response = await deleteProject(idProject);
      if (response) {
        getAllProjects();
      }
      setShowModal(false);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
    setIsDelete(false);
  };

  return {
    handleModal,
    handleEditClick,
    handleDelete,
    handleUploadImage,
    onSubmitRegister,
    onSubmitUpdate,
    onSubmitDelete,
    isLoading,
    isDelete,
    projects,
    showModal,
    editTitle,
    editDescription,
    imageURL,
    image,
  };
};
