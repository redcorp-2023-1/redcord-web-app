import axios from 'axios';

const https = axios.create({baseURL:"redcorpcenter.azurewebsites.net/api/Employee"})

export class AuthApiService {
  postTrabajador(body) {
    return https.post('/Signup', body);
  }

  login(body) {
    return https.post('/login', body);
  }
}
