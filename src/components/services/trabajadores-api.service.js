import axios from 'axios';

const https = axios.create({
    baseURL:"https://localhost:7233/api/Employee",
    headers:{
        Authorization:'Bearer '+ localStorage.getItem('token')
    }
})

export class TrabajadorApiService {
  getAllTrabajadores() {
    return https.get();
  }

  createTrabajador(body){
    return https.post('/',body);
  }

  getById(id) {
    return https.get('/' + id);
  }
  delete(id) {
    return https.delete('/' + id);
  }

  updateTrabajador(id,body){
    return https.put('/'+id,body);
  }
}
