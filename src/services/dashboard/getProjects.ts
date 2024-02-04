export async function getProjects() {
  try {
    const response = await fetch("/api/dashboard/home", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch (error: any) {
    return error;
  }
}
