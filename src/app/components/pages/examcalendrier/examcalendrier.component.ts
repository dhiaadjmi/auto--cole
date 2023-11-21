import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
@Component({
  selector: 'app-examcalendrier',
  templateUrl: './examcalendrier.component.html',
  //template: `<ejs-schedule height="600" width="1200"  > </ejs-schedule>`,
  styleUrls: ['./examcalendrier.component.css']
})
export class ExamcalendrierComponent implements OnInit {

  ngOnInit():void{

    }
    constructor(private route:Router)

    {}
  public data: object[] = [
    {
      Id: 1,
      Subject: 'examen conduite (dhia adjmi',
      StartTime: new Date(2023, 1, 15, 11, 0),
      EndTime: new Date(2023, 1, 15, 12, 30)
    },
    {
      Id: 2,
      Subject: 'examen de code  (aziz abdelghani)',
      StartTime: new Date(2023, 1, 19, 12, 0),
      EndTime: new Date(2023, 1, 19, 13, 30)
    },

    {
      Id: 3,
      Subject: ' examen de code de la route (Epi)',
      StartTime: new Date(2023, 1, 19, 8, 0),
      EndTime: new Date(2023, 1, 19, 9, 0)
    },
  ]
  public selectedDate: Date = new Date(2023 ,1, 19);
  public eventSettings: EventSettingsModel = {
    dataSource: this.data
  }
  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['/login'])
  }
  }


