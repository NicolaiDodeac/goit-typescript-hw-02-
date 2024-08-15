import axios from "axios";

export const fetchImages = async (query, page) => {
  try {
    const res = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query,
        per_page: 20,
        page,
        client_id: "BcX-mIO6E9o29CuldtNqNJelZf50Lfo-COWnIkMj8MM",
      },
    });
    return res.data;
  } catch (error) {
    console.error("Error fetching photos:", error);
  }
};
