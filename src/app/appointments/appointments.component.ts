import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.css']
})
export class AppointmentsComponent implements OnInit {

  constructor(private appointmentServce: AppointmentService) { }

  ngOnInit(): void {
    this.appointmentServce.getAppointments().subscribe(data => {
      console.log(data)
    })
  }

}
