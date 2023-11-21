import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
@Component({
  selector: 'app-calendrierseance',
  templateUrl: './calendrierseance.component.html',

  // specifies the template string for the Schedule component

  //template: `<ejs-schedule height="600" width="1200" [selectedDate]='selectedDate'
 // [eventSettings]='eventSettings' > </ejs-schedule>`,

  styleUrls: ['./calendrierseance.component.css']
})
export class CalendrierseanceComponent  implements OnInit {

  ngOnInit():void{

    }
    constructor(private route:Router)

  {}
  public data: object[] = [
    {
      Id: 1,
      Subject: 'Séance de conduite (dhia adjmi',
      StartTime: new Date(2023, 1, 15, 10, 0),
      EndTime: new Date(2023, 1, 15, 11, 30)
    },
    {
      Id: 2,
      Subject: 'Séance de conduite (aziz abdelghani)',
      StartTime: new Date(2023, 1, 15, 12, 0),
      EndTime: new Date(2023, 1, 15, 13, 30)
    },

    {
      Id: 3,
      Subject: 'Séance de code de la route (Epi)',
      StartTime: new Date(2023, 1, 14, 12, 0),
      EndTime: new Date(2023, 1, 14, 13, 30)
    },









  ];
  public selectedDate: Date = new Date(2023 ,1, 15);
  public eventSettings: EventSettingsModel = {
    dataSource: this.data
  }
  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['/login'])
  }
}
