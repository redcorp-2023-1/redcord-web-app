import axios from 'axios';

const https = axios.create({
    baseURL:"https://localhost:7233/api/Task",
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