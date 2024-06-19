import axios from 'axios';

const https = axios.create({
    baseURL:"https://redcorp-cudacdhxfyffgehj.eastus-01.azurewebsites.net/api/Task",
    headers:{
        Authorization:'Bearer '+ localStorage.getItem('token')
    }
})

export class TaskService{
    getAllTasks(){
        return https.get();
    }

    postTask(body){
        return https.post('/',body);
    }

    getById(id) {
        return https.get('/' + id);
      }
}