
import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
@Component({
  selector: 'app-moniteurseance',
  templateUrl: './moniteurseance.component.html',
  styleUrls: ['./moniteurseance.component.css']
})
export class MoniteurseanceComponent implements OnInit {

  ngOnInit():void{

    }
    constructor(private route:Router)
    {

    }
    logout(){
      localStorage.removeItem('token')
      this.route.navigate(['/login'])
    }
  public data: object[] = [
    {
      Id: 1,
      Subject: 'Séance de conduite (dhia adjmi',
      StartTime: new Date(2023, 1, 15, 9, 0),
      EndTime: new Date(2023, 1, 15, 11, 0)
    },
    {
      Id: 2,
      Subject: 'Séance de conduite (aziz abdelghani)',
      StartTime: new Date(2023, 1, 15, 15, 0),
      EndTime: new Date(2023, 1, 15, 16, 30)
    },

    {
      Id: 1,
      Subject: 'examen conduite (dhia adjmi',
      StartTime: new Date(2023, 1, 15, 11, 0),
      EndTime: new Date(2023, 1, 15, 12, 30)
    },









  ];
  public selectedDate: Date = new Date(2023 ,1, 15);

  public eventSettings: EventSettingsModel = {
    dataSource: this.data
  }

}



