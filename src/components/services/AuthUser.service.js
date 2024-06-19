import axios from 'axios';
//https://redcorpcenter.azurewebsites.net
const https = axios.create({baseURL:"https://redcorp-cudacdhxfyffgehj.eastus-01.azurewebsites.net/api/Employee"})

export class AuthApiService {
  postTrabajador(body) {
    return https.post('/Signup', body);
  }

  login(body) {
    return https.post('/Login', body);
  }
}
