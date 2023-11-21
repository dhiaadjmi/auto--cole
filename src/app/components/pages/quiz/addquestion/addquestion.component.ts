
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/shared/services/quiz.service';

@Component({
  selector: 'app-addquestion',
  templateUrl: './addquestion.component.html',
  styleUrls: ['./addquestion.component.css']
})
export class AddquestionComponent implements OnInit {
  quizid:any;
  msg: any = [];


  obj:any;
  options:any[]= [];
  constructor(private qs:QuizService,private route: Router) { }
  ngOnInit(): void {
   /**  if(this.qs.getQuizId()==undefined)
    {
      this.router.navigate(['uploadquiz']);
    }
    else
    {
      this.quizid=this.qs.getQuizId();

    }
    */
  }
  addQuestion(f: any) {

    this.options.push({optionValue: '1',optionText:f.controls.optionA.value});
    this.options.push({optionValue: '2',optionText:f.controls.optionB.value});
    this.options.push({optionValue: '3',optionText:f.controls.optionC.value});
    this.options.push({optionValue: '4',optionText:f.controls.optionD.value});
    // console.log(this.options);
    this.obj = {quizid:this.quizid,options:this.options,questionText:f.controls.questionText.value,answer:f.controls.answer.value}
    // console.log(this.obj);

    this.qs.addQuestion(this.obj)
    .subscribe(
      data => {
         console.log(data);

      }
    )





  }
  logout(){
    localStorage.removeItem('token')
    this.route.navigate(['/login'])
  }
}
