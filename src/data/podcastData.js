export async function fetchPodcastData() {
  try {
    const response = await fetch("https://podcast-api.netlify.app/");

    if (!response.ok) {
      throw new Error("HTTP error status: " + response.status);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    console.log("error fetching data: ", error);
  }
}
