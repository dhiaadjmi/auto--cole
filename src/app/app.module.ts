import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/partials/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './components/pages/login/login.component';
import { AuthentificationService } from '../app/shared/services/authentification.service';
import { AppRoutingModule } from './app-routing.module';
import { AllusersComponent } from './components/pages/allusers/allusers.component';
import { ManagerComponent } from './layouts/manager/manager.component';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { AdduserComponent } from './components/dialogs/adduser/adduser.component';
import { UserdetailsComponent } from './components/pages/userdetails/userdetails.component';
import { CreatequizComponent } from './components/pages/quiz/createquiz/createquiz.component';
import { UploadquizComponent } from './components/pages/quiz/uploadquiz/uploadquiz.component';
import { AddquestionComponent } from './components/pages/quiz/addquestion/addquestion.component';
import { SeequestionComponent } from './components/pages/quiz/seequestion/seequestion.component';
import { PlayquizComponent } from './components/pages/quiz/playquiz/playquiz.component';
import { QuizlistComponent } from './components/pages/quiz/quizlist/quizlist.component';

import { AllvehiculesComponent } from './components/pages/allvehicules/allvehicules.component';
import { AddvehiculeComponent } from './components/dialogs/adduser/addvehicule/addvehicule.component';
import { CalendrierseanceComponent } from './components/pages/calendrierseance/calendrierseance.component';
import { ScheduleModule, RecurrenceEditorModule ,DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService} from '@syncfusion/ej2-angular-schedule';
import { ExamcalendrierComponent } from './components/pages/examcalendrier/examcalendrier.component';
import { QuizcandidatlistComponent } from './components/pages/quiz/quizcandidatlist/quizcandidatlist.component';
import { AllcandidatesComponent } from './components/pages/allcandidates/allcandidates.component';
import { AddcandidateComponent } from './components/dialogs/addcandidate/addcandidate.component';
import { SidebarComponent } from './components/partials/sidebar/sidebar.component';
import { ExamenComponent } from './components/CandidatPages/examen/examen.component';
import { SeancesComponent } from './components/CandidatPages/seances/seances.component';
import { MoniteurseanceComponent } from './components/MoniteurPages/moniteurseance/moniteurseance.component';
import { CandidatformoniteurComponent } from './components/MoniteurPages/moniteurseance/candidatformoniteur/candidatformoniteur.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    AllusersComponent,
    ManagerComponent,
    AdduserComponent,
    UserdetailsComponent,
    CreatequizComponent,
    UploadquizComponent,
    AddquestionComponent,
    SeequestionComponent,
    PlayquizComponent,
    QuizlistComponent,
    AllvehiculesComponent,
    AddvehiculeComponent,
    CalendrierseanceComponent,
    ExamcalendrierComponent,
    QuizcandidatlistComponent,
    AllcandidatesComponent,
    AddcandidateComponent,
    SidebarComponent,
    ExamenComponent,
    SeancesComponent,
    MoniteurseanceComponent,
    CandidatformoniteurComponent,





  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    ScheduleModule, RecurrenceEditorModule
  ],
  providers: [AuthentificationService,DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService, TimelineViewsService, TimelineMonthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
