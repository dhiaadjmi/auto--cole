import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {
  constructor(private route:Router)
  {

  }
  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['/login'])
  }
  ngOnInit():void{

    }
  public data: object[] = [
    {
      Id: 1,
      Subject: 'examen conduite (dhia adjmi',
      StartTime: new Date(2023, 2, 15, 10, 0),
      EndTime: new Date(2023, 2, 15, 11, 30)
    },


  ]
  public selectedDate: Date = new Date(2023 ,2, 15);
  public eventSettings: EventSettingsModel = {
    dataSource: this.data
  }

  }
