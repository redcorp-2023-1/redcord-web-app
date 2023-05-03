import axios from "axios";

const http = axios.create({baseURL:"http://localhost:3000/trabajadores"})

export class TrabajadorApiService{

    getAll(){
        return http.get()
    }

    getById(id)
    {
        return http.get('/'+id)
    }
    delete(id)
    {
        return http.delete('/'+id)
    }

}