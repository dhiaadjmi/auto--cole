import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class QuizService {
  private quizid: any;
  private delete:any;

  public avail: boolean = false;
  public msg: string = "";
  private baseUri: string = "http://localhost:3030/quiz/";
  constructor(private http: HttpClient, private router: Router) { }




  createQuiz(body:any){

    return this.http.post('http://localhost:3030/quizzs/addquizz',body)

  }
  setQuizId(id:any) {
    this.quizid = id;
  }

  getQuizId() {
    return this.quizid;
  }

  addQuestion(body:any){

    return this.http.post('http://localhost:3030/questions/addquestion',body)

  }
  setDelete(data:any) {
    this.delete = data;
  }

  getDelete() {
    return this.delete;
  }
  deletequiz(id:any) {
    return this.http.delete('http://localhost:3030/quizzs' + id );
  }
  getAllQuizz() {
    return this.http.get('http://localhost:3030/quizzs/quizzes');
  }
  getOneQuiz(id:any) {
    return this.http.get('http://localhost:3030/quizzs/'+ id );
  }

}
