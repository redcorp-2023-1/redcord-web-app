import axios from "axios";

const https = axios.create({baseURL:"https://redcorpcenter.azurewebsites.net/api/SectionAndEmployee"})

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