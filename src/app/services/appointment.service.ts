import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private http: HttpClient) { 

  }

  getAppointments() {
    let headersOptions = new HttpHeaders ({'Authorization': `${localStorage.getItem("token")}`});  
   
    return this.http.get('http://localhost:8000/api/v1/appointments/', {headers:headersOptions})
  }
}
