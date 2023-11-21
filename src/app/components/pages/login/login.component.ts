import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { AllusersComponent } from '../allusers/allusers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthentificationService } from "../../../shared/services/authentification.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  datatoken:any
  messageError:any

  constructor(private authentificationService:AuthentificationService,private route:Router) {

  }

  ngOnInit() {
    localStorage.clear();

  }
//** */
  login(f:any){
    let data=f.value ;
    this.authentificationService.login(data).subscribe(
data=>{
this.datatoken=data
console.log(this.datatoken)
console.log(this.datatoken.token.token)
this.authentificationService.saveToken(this.datatoken.token.token)
this.route.navigate(['/users'])
//this.route.navigate(['/moniteurcandidates'])
//this.route.navigate(['/quizcandidat'])
//this.route.navigate(['/candidats'])

} )



}


}

