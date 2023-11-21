import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from "@angular/common/http";
import { JwtHelperService } from "@auth0/angular-jwt";
import { environment } from "../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
   helper = new JwtHelperService();


  constructor(private httpclient: HttpClient) { }


  login(body:any) {
    return this.httpclient.post('http://localhost:3030/users/login',body)

  }


  saveToken(token:any){
    let decodeToken= this.helper.decodeToken(token)
    console.log(decodeToken)
      localStorage.setItem('token',token)

  }


  userLoggedIn(){



    if(!localStorage.getItem('token')){
      return false
    }
    let token:any=localStorage.getItem('token')
    let decodeToken=this.helper.decodeToken(token)


    /**  if(decodeToken.role){
       return false
     }
     */

     if(this.helper.isTokenExpired(token)){
       return false
     }

     return true


  }
  getUsername(){
    let token:any=localStorage.getItem('token')
    let decodeToken= this.helper.decodeToken(token)

     return decodeToken.username

   }


}
