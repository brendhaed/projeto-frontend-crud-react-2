import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const useSerieCards = () => {
  const getSerieCards = async () => {
    const response = await api.get("/series");
    return response.data;
  };

  const getSerieCard = async (id) => {
    const response = await api.get(`/series/${id}`);
    return response.data;
  };

  const updateSerieCard = async (updatedSerie) => {
    await api.put(`/series/${updatedSerie.id}`, updatedSerie);
  };

  const deleteSerieCard = async (id) => {
    await api.delete(`/series/${id}`);
  };

  const createSerieCard = async (newSerie) => {
    await api.post("/series", newSerie);
  };

  return {
    getSerieCards,
    getSerieCard,
    updateSerieCard,
    deleteSerieCard,
    createSerieCard,
  };
};

export default useSerieCards;
