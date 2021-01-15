import mockApi from './api';

interface reqDTO {
  email: string;
  password: string;
}

export default async function (reqDTO: reqDTO): Promise<void> {
  const response = await mockApi.post('/auth');

  if (!response.error) {
    const { token, user } = response;

    mockApi.setHeader(`Bearer ${token}`);

    localStorage.setItem('@my_domain:token', JSON.stringify(token));
    localStorage.setItem('@my_domain:user', JSON.stringify(user));
  }
}
