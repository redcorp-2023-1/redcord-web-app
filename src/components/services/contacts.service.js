import axios from 'axios';

const http = axios.create({ baseURL: 'https://redcorp-cudacdhxfyffgehj.eastus-01.azurewebsites.net/contacts' });

export class ContactsService {
  async getAll() {
    const response = await http.get();

    return response.data;
  }
}
