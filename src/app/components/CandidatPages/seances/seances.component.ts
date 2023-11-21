import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { EventSettingsModel, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';

@Component({
  selector: 'app-seances',
  templateUrl: './seances.component.html',
  styleUrls: ['./seances.component.css']
})
export class SeancesComponent  implements OnInit {
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
      Subject: 'Séance de conduite (dhia adjmi',
      StartTime: new Date(2023, 1, 15, 10, 0),
      EndTime: new Date(2023, 1, 15, 11, 30)
    },









  ];
  public selectedDate: Date = new Date(2023 ,1, 15);
  public eventSettings: EventSettingsModel = {
    dataSource: this.data
  }

}
