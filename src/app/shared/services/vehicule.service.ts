
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpEvent, HttpRequest ,HttpParams} from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { tap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class VehiculeService {
data:any
  constructor(private http: HttpClient) { }
  params=new HttpParams()
  .set('secret',environment.secret)
/**
  getAllVehicules(){
    return this.http.get('http://localhost:3030/vehicules/vehicules')
  }
*/



  getAllVehicules() {
    return this.http.get('http://localhost:3030/vehicules/vehicules').pipe(
      tap(data => console.log(data)) // Log the data before returning
    );
  }



  addVehicule(info:any){

    return this.http.post('http://localhost:3030/vehicules/addvehicule',info)

  }

  deleteVehicule(id:any){
    return this.http.delete('http://localhost:3030/vehicules/vehicule/'+id)

  }


  updateVehicule(id:string,newInfo:any){

    return this.http.patch('http://localhost:3030/vehicules/vehicule/'+id,newInfo)

  }
}
