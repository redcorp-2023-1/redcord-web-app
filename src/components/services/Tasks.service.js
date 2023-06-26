import axios from 'axios';

const https = axios.create({
    baseURL:"https://redcorpcenter.azurewebsites.net/api/Team",
    headers:{
        Authorization:'Bearer '+ localStorage.getItem('token')
    }
})

export class TaskApiService {
  GetTasksByIdEmployee(employee_id) {
    return https.get('/GetTasksByIdEmployee/' + employee_id);
  }

  GetTeamsByIdEmployee(employee_id) {
    return https.get('/GetTeamsById/' + employee_id);
  }

  GetEmployeesContactsByTeamId(employee_id) {
    return https.get('/GetEmployeesContactsByTeamId/' + employee_id);
  }
}
