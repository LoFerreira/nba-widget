import { api } from "api";

export const PATH = "games";

export const getAllGames = async () => {
  try {
    const { data } = await api.get(PATH);
    return data;
  } catch (error) {
    throw error;
  }
};
