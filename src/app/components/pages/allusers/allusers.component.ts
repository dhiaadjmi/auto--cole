import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';
import { AuthentificationService } from 'src/app/shared/services/authentification.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.css']
})
export class AllusersComponent implements OnInit {

  username:any
dataArray:any
searchResults: any[] = [];
searchQuery: string = '';
dataUser={
  username: '',
  email: '',
  password: '',
  nom: '',
  prenom: '',
  dateNaissance: '',
  adresse: '',
  numeroTel: '',
  numeroCin: 0,
  typeMoniteur: '',
  numPermi: 0,
  numDiplome: 0,
  typePermi: '',
  role:'',
  id:''

}
messageSuccess=''
  constructor(private us:UserService ,private as:AuthentificationService ,private route:Router,private http: HttpClient)
{
  this.username=this.as.getUsername()
}



ngOnInit():void{
this.getAllusers();
}

getAllusers(){
  this.us.getAllusers().subscribe(data=>this.dataArray=data)
}

delete(id:any,i:number){

  Swal.fire({
    title: 'êtes-vous sûr?',
    text: "Supprimer cette utilisateur",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'Annuler',
    confirmButtonText: 'Oui'
  }).then((result) => {
    if (result.isConfirmed) {
      this.us.deleteuser(id).subscribe(response=>{
        console.log(response)
         this.dataArray.splice(i,1)

      })
        Swal.fire({
          icon: 'success',
          title: ' utilisateur a éte Supprimer !',
          showConfirmButton: false,
          timer: 1000
        })


    }
  })


}
getdata(username:string,email:string, nom: string,prenom: string,dateNaissance: string,adresse: string,numeroTel: string,numeroCin: number,typeMoniteur: string,numPermi: number,numDiplome: number,typePermi: string,role:string,id:any){
  this.messageSuccess=''

  this.dataUser.username=username
  this.dataUser.email=email
  this.dataUser.nom=nom
  this.dataUser.prenom=prenom
  this.dataUser.dateNaissance=dateNaissance
  this.dataUser.adresse=adresse
  this.dataUser.numeroTel=numeroTel
  this.dataUser.numeroCin=numeroCin
  this.dataUser.typeMoniteur=typeMoniteur
  this.dataUser.numPermi=numPermi
  this.dataUser.numDiplome=numDiplome
  this.dataUser.typePermi=typePermi
  this.dataUser.role=role
  this.dataUser.id=id

  console.log(this.dataUser)

}
updatenewUser(f:any){
  let data=f.value
  this.us.updateuser(this.dataUser.id,data).subscribe(response=>
    {
    console.log(response)
      let indexId=this.dataArray.findIndex((obj:any)=>obj._id==this.dataUser.id)

      this.dataArray[indexId].username=data.username
      this.dataArray[indexId].email=data.email
      this.dataArray[indexId].nom=data.nom
      this.dataArray[indexId].prenom=data.prenom
      this.dataArray[indexId].dateNaissance=data.dateNaissance
      this.dataArray[indexId].adresse=data.adresse
      this.dataArray[indexId].numeroTel=data.numeroTel
      this.dataArray[indexId].numeroCin=data.numeroCin
      this.dataArray[indexId].typeMoniteur=data.typeMoniteur
      this.dataArray[indexId].numPermi=data.numPermi
      this.dataArray[indexId].numDiplome=data.numDiplome
      this.dataArray[indexId].numDiplome=data.typePermi

      this.messageSuccess=`this user ${this.dataArray[indexId].username} is updated`


    },(err:HttpErrorResponse)=>{
      console.log(err.message)

    })
}

details(id:any){
  this.route.navigate(['/userdetails/'+id])
}

logout(){
  localStorage.removeItem('token')
  this.route.navigate(['/login'])
}














}


