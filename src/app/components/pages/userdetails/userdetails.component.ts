
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent {
  id=''
  dataObject:any
  messageErr=''
  constructor(private route:ActivatedRoute,private us:UserService) {
    this.route.params.subscribe(params=>this.id=params['id'] )

    this.us.getOneuser(this.id).subscribe(response=>this.dataObject=response,(err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this user in our database"})
   }

  ngOnInit(): void {
  }
}
