import axios from 'axios';

const https = axios.create({
    baseURL:"https://localhost:7233/api/Project",
    headers:{
        Authorization:'Bearer '+ localStorage.getItem('token')
    }
})

export class ProjectService{
    getAllProjects(){
        return https.get();
    }

    postProject(body){
        return https.post('/',body);
    }

    getById(id) {
        return https.get('/' + id);
      }
}