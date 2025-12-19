import api from "../../services/api";

const useSerieCards = () => {
  const getSerieCards = async () => {
    const response = await api.get("/series");
    return response.data;
  }; 

  return {
    getSerieCards,
  };
};

export default useSerieCards;

