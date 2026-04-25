import { loginRepository } from "@/repository/login-repository";


export async function loginAdapter(email: string, password: string) {
  const data = await loginRepository(email, password);

  return data;
}