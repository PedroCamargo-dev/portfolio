"use client";

import { useDashboard } from "@/hooks/dashboard/useDashboard";
import { DashboardHome } from "@/components/Templates/Dashboard/home";

export default function Home() {
  const {
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
  } = useDashboard();

  return (
    <DashboardHome
      handleModal={() => handleModal()}
      handleEditClick={handleEditClick}
      projects={projects}
      isLoading={isLoading}
      onSubmitRegister={onSubmitRegister}
      onSubmitUpdate={onSubmitUpdate}
      handleUploadImage={handleUploadImage}
      editTitle={editTitle}
      editDescription={editDescription}
      imageURL={imageURL}
      image={image}
      showModal={showModal}
    />
  );
}
