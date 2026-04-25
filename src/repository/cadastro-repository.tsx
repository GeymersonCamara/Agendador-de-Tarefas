import api from "@/services/api";

interface CreateUserDTO {
  name: string;
  email: string;
  password: string;
  birthDate: string;
}

export async function createUser(data: CreateUserDTO) {
  const response = await api.post("/users", data);
  return response.data;
}