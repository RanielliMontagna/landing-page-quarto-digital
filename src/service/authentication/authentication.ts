import api from 'service/api';

export const login = async (email: string, password: string) => {
  const response = await api.post('/login', { email, password });

  return response.data;
};