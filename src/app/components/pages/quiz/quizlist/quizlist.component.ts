import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/shared/services/quiz.service';
@Component({
  selector: 'app-quizlist',
  templateUrl: './quizlist.component.html',
  styleUrls: ['./quizlist.component.css']
})

export class QuizlistComponent {
  msg: any = [];
  dataArray:any;
  public loading: any = true;
  constructor(private qs: QuizService, private router: Router) { }
  ngOnInit(): void {
    this.loading = true

    this.getAllQuizz();
  }

  getAllQuizz(){
    this.qs.getAllQuizz().subscribe(data=>this.dataArray=data)

  }


 /**
  getdata() {
    this.qs.getAllQuizz()
      .subscribe(
        data=>this.dataArray=data
*/
        /**
        data => {
          if (data['quiz']) {
            this.quiz = data['quiz']
            this.loading = false;
            // console.log(this.quiz.length);
            if (!this.quiz.length) {
              this.empty = true;

            }
            else {
              this.empty = false;
            }
          }


          // console.log(data);
          // this.router.navigate(['/teacher/teacherhome']);
        }, */
       // error => {
        //  this.router.navigate(['/error']);
       // }


    //  )

  //}

  delete(id:any,i:number){

    this.qs.deletequiz(id).subscribe(response=>{
      console.log(response)
      this.dataArray.splice(i,1)

    })

  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }
}
