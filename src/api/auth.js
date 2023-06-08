import api from "./api";

// Função para fazer login
export const login = async (credentials) => {
  try {
    const response = await api.post("/login", credentials);
    return response.data;
  } catch (error) {
    throw new Error("Falha ao fazer login");
  }
};

// Função para fazer logout
export const logout = async () => {
  try {
    const response = await api.post("/logout");
    return response.data;
  } catch (error) {
    throw new Error("Falha ao fazer logout");
  }
};

// Função para verificar o estado de autenticação do usuário
export const isAuthenticated = async () => {
  try {
    const response = await api.get("/is-authenticated");
    return response.data.authenticated;
  } catch (error) {
    throw new Error("Erro ao verificar autenticação");
  }
};
