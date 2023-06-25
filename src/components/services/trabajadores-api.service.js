import axios from "axios";

const https = axios.create({baseURL:"https://redcorpcenter.azurewebsites.net/api/Employee"})

export class TrabajadorApiService{

    getAllTrabajadores(){
        return https.get()
    }

    getById(id)
    {
        return https.get('/'+id)
    }
    delete(id)
    {
        return https.delete('/'+id)
    }

    postTrabajador(body) {
        return https.post('/Signup', body);
    }
    
    login(body)
    {
        return https.post('/login',body);
    }

}