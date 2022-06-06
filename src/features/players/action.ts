import { api } from "api";

export const PATH = "players";

export const getAllPlayers = async () => {
  try {
    const { data } = await api.get(PATH);
    return data;
  } catch (error) {
    throw error;
  }
};
