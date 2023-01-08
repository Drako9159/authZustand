import React from "react";
import { loginRequest } from "../api/auth";

export default function LoginPage() {
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const email = (e.currentTarget.elements[0] as HTMLInputElement).value;
    const password = (e.currentTarget.elements[1] as HTMLInputElement).value;
    const resLogin = await loginRequest(email, password);
    console.log(resLogin);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="email@mail.com"></input>
      <input type="password" placeholder="******"></input>
      <button type="submit">Login</button>
    </form>
  );
}
