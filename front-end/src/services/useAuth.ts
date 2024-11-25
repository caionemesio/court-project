import api from "../config/api";

export default function useAuth() {
  async function SigIn(values: { email: string, password: string }) {
    try {
      const response = await api.post("/login", {
        email: values.email,
        password: values.password
      })
      return response.data;
    } catch (err: any) {
      return err.response.data.message;
    }
  }

  async function register(values: { name: string, email: string, password: string }) {
    try {
      const response = await api.post("/register", {
        name: values.name,
        email: values.email,
        password: values.password
      })
      return response.data;
    } catch (err: any) {
      return err.response.data.message;
    }
  }
  return { SigIn, register }
}