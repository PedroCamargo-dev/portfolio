export async function deleteProject(idProject: string) {
  try {
    const response = await fetch(`/api/dashboard/home?id=${idProject}`, {
      method: "DELETE",
    });

    const data = await response.json();
    return data;
  } catch (error: any) {
    return error;
  }
}
