// import axios from "axios";

// const useSerieCards = () => {
//   const getSerieCards = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/series");
//       return response.data;
//     } catch (error) {
//       throw new Error(error.message);
//     }
//   };

//   const getSerieCard = async (id) => {
//     try {
//       const response = await axios.get(`http://localhost:5000/series/${id}`);
//       return response.data;
//     } catch (error) {
//       throw new Error(error.message);
//     }
//   };

//   const updateSerieCard = async (updatedSerie) => {
//     try {
//       await axios.put(
//         `http://localhost:5000/series/${updatedSerie}`,
//         updatedSerie
//       );
//     } catch (error) {
//       throw new Error(error.message);
//     }
//   };

//   const deleteSerieCard = async (id) => {
//     try {
//       await axios.delete(`http://localhost:5000/series/${id}`);
//     } catch (error) {
//       throw new Error(error.message);
//     }
//   };

//   const createSerieCard = async (newSerie) => {
//     try {
//       await axios.post("http://localhost:5000/series", newSerie);
//     } catch (error) {
//       throw new Error(error.message);
//     }
//   }

//   return {
//     getSerieCards,
//     getSerieCard,
//     updateSerieCard,
//     deleteSerieCard,
//     createSerieCard,
//   };
// };

// export default useSerieCards;

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
