import axios from 'axios';

const https = axios.create({
    baseURL:"https://redcorp-cudacdhxfyffgehj.eastus-01.azurewebsites.net/api/Project",
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