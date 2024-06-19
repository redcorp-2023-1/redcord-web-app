import axios from 'axios';

const http = axios.create({ baseURL: 'https://localhost:7233/groups' });

export class GroupsService {
  async getAll() {
    const response = await http.get();

    return response.data;
  }
}
