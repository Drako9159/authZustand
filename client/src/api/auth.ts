import axios from "axios";

export async function loginRequest(email: string, password: string) {
  return axios.post("http://localhost:3000/login", { email, password });
}
