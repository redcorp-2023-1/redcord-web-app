import axios from 'axios';

const https = axios.create({baseURL:"https://redcorpcenter.azurewebsites.net/api/Employee"})

export class AuthApiService {
  postTrabajador(body) {
    return https.post('/Signup', body);
  }

  login(body) {
    return https.post('/login', body);
  }
}
