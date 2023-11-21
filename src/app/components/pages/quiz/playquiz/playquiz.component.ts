import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playquiz',
  templateUrl: './playquiz.component.html',
  styleUrls: ['./playquiz.component.css']
})
export class PlayquizComponent {

  solutionArray: any[] = [];
  ansOfOneQuestion: any[] = [];
  ansKey: any[] = [];
  time: any = 10;
  timePerQuestion: any;
  interval: any;
  temp: any;
  score: any = 0;
  flageLast: any = false;
  totalQuestion: any;
  questionCounter: any = 1;
  finishflag: any = false;
  finalsubmit: boolean = false;
  // submitAvail:any = true;

  allQuestions: any[] = [
    {
      questionId: 1,
      questionText: 'Quelle est la signification du feu de signalisation affichant une lumière jaune clignotante ?',
      options: [
        { optionValue: '1', optionText: 'Feu de signalisation hors service.' },
        { optionValue: '2', optionText: 'Attention, ralentir et être prêt à sarrêter.' },
        { optionValue: '3', optionText: 'Feu vert pour les véhicules prioritaires' },
        { optionValue: '4', optionText: 'Passage autorisé' }
      ],
      answer: '1',

    },
    {
      questionId: 2,
      questionText: 'Quelle est la signification du panneau triangulaire avec un bord rouge et un pictogramme de voiture à lintérieur ? ',
      options: [
        { optionValue: '1', optionText: 'Zone de stationnement réservée aux véhicules.' },
        { optionValue: '2', optionText: 'Fin de la limitation de vitesse' },
        { optionValue: '3', optionText: 'Cédez le passage' },
        { optionValue: '4', optionText: 'Interdiction de doubler.' }
      ],
      answer: '2',

    },
    {
      questionId: 3,
      questionText: 'Quelle est la signification du panneau rond avec un bord rouge et un pictogramme représentant un camion à lintérieur ?',
      options: [
        { optionValue: '1', optionText: ' Zone de stationnement pour les camions.' },
        { optionValue: '2', optionText: 'Intersection à venir.' },
        { optionValue: '3', optionText: ' Interdiction daccès aux camions '},
        { optionValue: '4', optionText: 'Passage à niveau avec barrières.' }
      ],
      answer: '4',

    },
    {
      questionId: 4,
      questionText: 'Quelle est la signification du panneau triangulaire avec un bord blanc et une flèche noire pointant vers la droite ?',
      options: [
        { optionValue: '1', optionText: 'Changement de direction obligatoire vers la droite.' },
        { optionValue: '2', optionText:  'Intersection à venir avec une route à sens unique vers la droite.' },
        { optionValue: '3', optionText: 'Changement de voie vers la droite autorisé.' },
        { optionValue: '4', optionText: 'Sortie dautoroute à droite.' }
      ],
      answer: '3',

    },


  ];
  oneQuestion: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    // window.addEventListener('blur', event => {
    //   this.router.navigate(['/']);
    // localStorage.removeItem('load');
    // });

    // window.addEventListener('resize', event => {
    //   this.router.navigate(['/']);
    // localStorage.removeItem('load');

    // });

    console.log("loacal");
    console.log( );
    if(!localStorage.getItem('load'))
    {
      localStorage.setItem('load', '1');
    }
    else
    {
      alert("you reloaded this page");
    }

    this.createAns();
    this.shuffleQuestion();


    this.timePerQuestion = this.time;
    this.totalQuestion = this.allQuestions.length;
    this.oneQuestion = this.allQuestions[0];
    this.countdown();

  }

  shuffleQuestion() {
    var m = this.allQuestions.length, t, i;

    while (m) {
      i = Math.floor(Math.random() * m--);
      t = this.allQuestions[m];
      this.allQuestions[m] = this.allQuestions[i];
      this.allQuestions[i] = t;
    }
    this.shuffleOption();
  }

  shuffleOption() {
    for (let i = 0; i < this.allQuestions.length; i++) {
      var x = this.allQuestions[i].options;
      var m = 4, t, j;
      while (m) {
        j = Math.floor(Math.random() * m--);
        t = x[m];
        x[m] = x[j];
        x[j] = t;
      }

    }
  }



  createAns() {
    for (let index = 0; index < this.allQuestions.length; index++) {
      const id = this.allQuestions[index].questionId;
      const ans = this.allQuestions[index].answer;
      this.ansKey.push({ qid: id, ans: ans });

    }
    // console.log("key");
    // console.log(this.ansKey);
  }
  private countdown() {

    this.interval = setInterval(() => {
      if (this.timePerQuestion > 0) {
        this.timePerQuestion--;
      }
      if (this.timePerQuestion == 0) {
        // reset
        if (this.questionCounter + 1 <= this.totalQuestion) {
          this.oneQuestion = this.allQuestions[this.questionCounter];
          this.questionCounter++;
          if (this.questionCounter == this.totalQuestion) {
            this.flageLast = true;
          }
          this.timePerQuestion = this.time;
          console.log("reset timer");
        }


      }
    }, 1000);

    // console.log("hloo");
  }


  nextQuestion() {
    // console.log("button clicked");

    if (this.questionCounter != this.totalQuestion) {

      this.questionCounter++;
      if (this.questionCounter == this.totalQuestion) {
        this.flageLast = true;
      }
      this.oneQuestion = this.allQuestions[this.questionCounter - 1];
      this.timePerQuestion = this.time;

    }

  }
  navigatehome() {
    console.log("naa");
  }



  getScore() {
    // console.log("in get score");
    // console.log(this.ansKey);
    // console.log(this.ansOfOneQuestion);
    for (let i = 0; i < this.ansOfOneQuestion.length; i++) {
      for (let j = 0; j < this.ansKey.length; j++) {
        if (this.ansOfOneQuestion[i].qid == this.ansKey[j].qid) {
          if (this.ansOfOneQuestion[i].ans == this.ansKey[j].ans) {
            this.score++;
          }
        }
      }
    }

    // console.log("yyour score is ", this.score);
  }
}
