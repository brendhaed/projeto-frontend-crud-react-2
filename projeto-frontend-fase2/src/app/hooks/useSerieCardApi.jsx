import axios from "axios";

const useSerieCards = () => {
  const getSerieCards = async () => {
    try {
      const response = await axios.get("http://localhost:5000/series");
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const getSerieCard = async (id) => {
    try {
      const response = await axios.get(`http://localhost:5000/series/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const updateSerieCard = async (updatedSerie) => {
    try {
      await axios.put(
        `http://localhost:5000/series/${updatedSerie.id}`,
        updatedSerie
      );
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const deleteSerieCard = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/series/${id}`);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const createSerieCard = async (newSerie) => {
    try {
      await axios.post("http://localhost:5000/series", newSerie);
    } catch (error) {
      throw new Error(error.message);
    }
  }

  return {
    getSerieCards,
    getSerieCard,
    updateSerieCard,
    deleteSerieCard,
    createSerieCard,
  };
};

export default useSerieCards;