import axios from 'axios';

const https = axios.create({
    baseURL:"https://redcorpcenter.azurewebsites.net/api/Employee",
    headers:{
        Authorization:'Bearer '+ localStorage.getItem('token')
    }
})

export class TrabajadorApiService {
  getAllTrabajadores() {
    return https.get();
  }

  getById(id) {
    return https.get('/' + id);
  }
  delete(id) {
    return https.delete('/' + id);
  }
}
