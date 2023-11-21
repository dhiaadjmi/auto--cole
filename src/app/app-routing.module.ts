import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { LoginComponent } from './components/pages/login/login.component';
import { AllusersComponent } from './components/pages/allusers/allusers.component';
import { UserdetailsComponent } from './components/pages/userdetails/userdetails.component';
import { HeaderComponent } from'./components/partials/header/header.component';
import { ManagerComponent } from'./layouts/manager/manager.component';
import { AdduserComponent } from './components/dialogs/adduser/adduser.component';
import { CreatequizComponent } from './components/pages/quiz/createquiz/createquiz.component';
import { UploadquizComponent } from './components/pages/quiz/uploadquiz/uploadquiz.component';
import { AddquestionComponent } from './components/pages/quiz/addquestion/addquestion.component';
import { SeequestionComponent } from './components/pages/quiz/seequestion/seequestion.component';
import { PlayquizComponent } from './components/pages/quiz/playquiz/playquiz.component';
import { QuizlistComponent } from './components/pages/quiz/quizlist/quizlist.component';
import { AllvehiculesComponent } from './components/pages/allvehicules/allvehicules.component';
import { AddvehiculeComponent } from './components/dialogs/adduser/addvehicule/addvehicule.component';
import { CalendrierseanceComponent } from './components/pages/calendrierseance/calendrierseance.component';
import { ExamcalendrierComponent } from './components/pages/examcalendrier/examcalendrier.component';
import { QuizcandidatlistComponent } from './components/pages/quiz/quizcandidatlist/quizcandidatlist.component';
import { AllcandidatesComponent } from './components/pages/allcandidates/allcandidates.component';
import { AddcandidateComponent } from './components/dialogs/addcandidate/addcandidate.component';

import { SidebarComponent } from './components/partials/sidebar/sidebar.component';
import { ExamenComponent } from './components/CandidatPages/examen/examen.component';
import { SeancesComponent } from './components/CandidatPages/seances/seances.component';
import { MoniteurseanceComponent } from './components/MoniteurPages/moniteurseance/moniteurseance.component';
import { CandidatformoniteurComponent } from './components/MoniteurPages/moniteurseance/candidatformoniteur/candidatformoniteur.component';
const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "header", component: HeaderComponent },
  { path: "users", component: AllusersComponent },
  {path: "manager" , component: ManagerComponent},
  {path: "adduser" , component: AdduserComponent},
  {path: "userdetails" , component: UserdetailsComponent},
  {path: "createquiz" , component: CreatequizComponent},
  {path: "uploadquiz" , component: UploadquizComponent},
  {path: "addquestion" , component: AddquestionComponent},
  {path: "seequestion" , component: SeequestionComponent},
  {path: "playquiz" , component: PlayquizComponent},
  {path: "quizlist" , component: QuizlistComponent},
  {path: "vehicules" , component: AllvehiculesComponent},
  {path: "addvehicule" , component: AddvehiculeComponent},
  {path: "calendrier" , component: CalendrierseanceComponent},
  {path: "examens" , component: ExamcalendrierComponent},
  {path: "quizcandidat" , component: QuizcandidatlistComponent},
  {path: "candidats" , component: AllcandidatesComponent},
  {path: "addcandidate" , component: AddcandidateComponent},
  {path: "sidebar" , component: SidebarComponent},
  {path: "candidatexamen" , component: ExamenComponent},
  {path: "candidatseance" , component: SeancesComponent},
  {path: "moniteurseance" , component: MoniteurseanceComponent},
  {path: "moniteurcandidates" , component: CandidatformoniteurComponent},
];

@NgModule({
  imports: [
    CommonModule,
        BrowserModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
