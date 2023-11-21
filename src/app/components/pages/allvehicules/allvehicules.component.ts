import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { VehiculeService } from 'src/app/shared/services/vehicule.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-allvehicules',
  templateUrl: './allvehicules.component.html',
  styleUrls: ['./allvehicules.component.css']
})
export class AllvehiculesComponent {
  dataArray: any[] = [];
  messageSuccess=''


  dataVehicule={
    id:'',
    matricule: '',
    marque: '',
    modele: '',
    numeroSerie: '',
    dateAssurance: '',
    dateFinAssurance: '',
    dateCtrlTechnique: '',
    dateProchainCtrlTechnique: ''
  }
  constructor(private vs:VehiculeService ,private route:Router)

  {}

  ngOnInit():void{
  this.getAllVehicules();
  }
/**
  getAllVehicules(){
    //this.vs.getAllVehicules().subscribe(data=>this.dataArray=data)
    this.vs.getAllVehicules().subscribe((data: any[]) => {
      this.dataArray = data; // Assign the retrieved data to dataArray
    });
*/
/**getAllVehicules() {
  this.vs.getAllVehicules().subscribe((data: Object) => {
    this.dataArray = data as any[];
  });
}
*/



getAllVehicules() {
  this.vs.getAllVehicules().subscribe((data: any) => {
    //console.log(data); // Log the retrieved data
    this.dataArray = data.vehicules; // Assign the 'vehicules' array to dataArray
   // console.log(this.dataArray); // Log the assigned dataArray
  });
}


/**
  delete(){

    Swal.fire({
      title: 'êtes-vous sûr?',
      text: "Supprimer cette utilisateur",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Annuler',
      confirmButtonText: 'Oui'
    })

  }
*/
delete(id:any,i:number){

  Swal.fire({
    title: 'êtes-vous sûr?',
    text: "Supprimer cette Véhicule",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: 'Annuler',
    confirmButtonText: 'Oui'
  }).then((result) => {
    if (result.isConfirmed) {
      this.vs.deleteVehicule(id).subscribe(response=>{
        console.log(response)
         this.dataArray.splice(i,1)

      })
        Swal.fire({
          icon: 'success',
          title: ' Véhicule a éte Supprimer !',
          showConfirmButton: false,
          timer: 1000
        })


    }
  })


}

getdata(id:any,matricule:string,marque:string,modele:string,numeroSerie:string,dateAssurance:string,dateFinAssurance:string,dateCtrlTechnique:string,dateProchainCtrlTechnique:string){

  this.dataVehicule.id=id
  this.dataVehicule.matricule=matricule
  this.dataVehicule.marque=marque
  this.dataVehicule.modele=modele
  this.dataVehicule.numeroSerie=numeroSerie
  this.dataVehicule.dateAssurance=dateAssurance
  this.dataVehicule.dateFinAssurance=dateFinAssurance
  this.dataVehicule.dateCtrlTechnique=dateCtrlTechnique
  this.dataVehicule.dateProchainCtrlTechnique=dateProchainCtrlTechnique


  console.log(this.dataVehicule)

}

updatenewVehicule(f:any){
  let data=f.value
  this.vs.updateVehicule(this.dataVehicule.id,data).subscribe(response=>
    {
    console.log(response)
      let indexId=this.dataArray.findIndex((obj:any)=>obj._id==this.dataVehicule.id)

      this.dataArray[indexId].matricule=data.matricule,
      this.dataArray[indexId].marque=data.marque,
      this.dataArray[indexId].modele=data.modele,
      this.dataArray[indexId].numeroSerie=data.numeroSerie,
      this.dataArray[indexId].dateAssurance=data.dateAssurance,
      this.dataArray[indexId].dateFinAssurance=data.dateFinAssurance,
      this.dataArray[indexId].dateCtrlTechnique=data.dateCtrlTechnique,
      this.dataArray[indexId].dateProchainCtrlTechnique=data.dateProchainCtrlTechnique






    },(err:HttpErrorResponse)=>{
      console.log(err.message)

    })
}
logout(){
  localStorage.removeItem('token')
  this.route.navigate(['/login'])
}

}
