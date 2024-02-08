"use client";

import { useDashboard } from "@/hooks/dashboard/useDashboard";
import { DashboardHome } from "@/components/Templates/Dashboard/home";

export default function Home() {
  const {
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
  } = useDashboard();

  return (
    <DashboardHome
      handleModal={handleModal}
      handleEditClick={handleEditClick}
      handleDelete={handleDelete}
      projects={projects}
      isLoading={isLoading}
      isDelete={isDelete}
      onSubmitRegister={onSubmitRegister}
      onSubmitUpdate={onSubmitUpdate}
      onSubmitDelete={onSubmitDelete}
      handleUploadImage={handleUploadImage}
      editTitle={editTitle}
      editDescription={editDescription}
      imageURL={imageURL}
      image={image}
      showModal={showModal}
    />
  );
}
