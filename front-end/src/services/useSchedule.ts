import api from "../config/api";

export default function useSchedule() {

  const path = "/schedule";

  async function postSchedule(values: any) {
    try {
      const response = await api.post(path, values);
      return response.data;
    } catch (err: any) {
      return err.response.data.message;
    }
  }
  return { postSchedule }
}