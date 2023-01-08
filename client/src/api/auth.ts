import axios from "../libs/axios";

export async function loginRequest(email: string, password: string) {
  return axios.post("/login", { email, password });
}
export async function profileRequest() {
  return await axios.get("/profile");
}
