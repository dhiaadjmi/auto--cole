import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpEvent, HttpRequest ,HttpParams} from "@angular/common/http";
import { environment } from "../../../environments/environment";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  token:any=localStorage.getItem('token')

  headeruser=new HttpHeaders()
  .set('authorization',this.token)

  constructor(private http: HttpClient) { }
  params=new HttpParams()
  .set('secret',environment.secret)

  getAllusers(){
    return this.http.get('http://localhost:3030/users')
  }

  addUser(info:any){

    return this.http.post('http://localhost:3030/users/register',info)

  }
  deleteuser(id:any){
    return this.http.delete('http://localhost:3030/users/user/'+id)

  }
  updateuser(id:string,newprofile:any){

    return this.http.patch('http://localhost:3030/users/user/'+id,newprofile)

  }
  getOneuser(id:any){

    return this.http.get('http://localhost:3030/users/user/'+id)
  }

}
