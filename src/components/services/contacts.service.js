import axios from 'axios';

const http = axios.create({ baseURL: 'http://localhost:3000/contacts' });

export class ContactsService {
  async getAll() {
    const response = await http.get();

    return response.data;
  }
}
