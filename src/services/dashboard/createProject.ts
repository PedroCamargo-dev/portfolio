export async function createProject(formData: FormData) {
  try {
    const response = await fetch("/api/dashboard/home", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    return data;
  } catch (error: any) {
    return error;
  }
}
