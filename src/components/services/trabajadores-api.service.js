import axios from 'axios';

const https = axios.create({
    baseURL:"redcorpcenter.azurewebsites.net/api/Employee",
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
