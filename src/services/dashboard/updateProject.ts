export async function updateProject(formData: FormData, idProject: string) {
  try {
    const response = await fetch(`/api/dashboard/home?id=${idProject}`, {
      method: "PATCH",
      body: formData,
    });

    const data = await response.json();
    return data;
  } catch (error: any) {
    return error;
  }
}
