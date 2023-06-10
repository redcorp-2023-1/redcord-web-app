import axios from "axios";

const https = axios.create({baseURL:"https://localhost:7233/api/SectionAndEmployee"})

export class SectionAndEmployeeApiService{

    GetEmployeesBySectionId(section_id)
    {
        return https.get('/GetEmployees/'+section_id)
    }

    GetSectionsByEmployeeId(employee_id)
    {
        return https.get('/GetSections/'+employee_id)
    }

}