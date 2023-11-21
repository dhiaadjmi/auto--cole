import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { QuizService } from 'src/app/shared/services/quiz.service';

@Component({
  selector: 'app-createquiz',
  templateUrl: './createquiz.component.html',
  styleUrls: ['./createquiz.component.css']
})


export class CreatequizComponent implements OnInit {

  constructor(private qs:QuizService,private router: Router) { }
  public msg: any = [];
  public avail: boolean = false;

  ngOnInit(): void {
  }

  createQuiz(f: any) {

    let data=f.value

    this.qs.createQuiz(data).subscribe(data=>console.log(data))
          this.router.navigate(['/uploadquiz']);





  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['/login'])
  }

}
