import { api } from "api";

export const PATH = "teams";

export const getAllTeams = async () => {
  try {
    const { data } = await api.get(PATH);
    return data;
  } catch (error) {
    throw error;
  }
};
