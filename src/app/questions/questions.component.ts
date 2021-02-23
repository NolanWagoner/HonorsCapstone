import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //Action when main form submit button is clicked
    document.getElementById('main-submit')!!.addEventListener("click", function(event){
      //Prevents the default submit action
      event.preventDefault()
      //Build answer string to be used in route
      var answers = "";
      var q1 = document.getElementById('pw-yes') as HTMLInputElement;
      if(q1.checked){
        answers = answers + '1';
      } else{
        answers = answers + '0';
      }
      var q2 = document.getElementById('anti-yes') as HTMLInputElement;
      if(q2.checked){
        answers = answers + '1';
      } else{
        answers = answers + '0';
      }
      var q3 = document.getElementById('update-yes') as HTMLInputElement;
      if(q3.checked){
        answers = answers + '1';
      } else{
        answers = answers + '0';
      }
      var q4 = document.getElementById('links-yes') as HTMLInputElement;
      if(q4.checked){
        answers = answers + '1';
      } else{
        answers = answers + '0';
      }
      var q5 = document.getElementById('unlocked-yes') as HTMLInputElement;
      if(q5.checked){
        answers = answers + '1';
      } else{
        answers = answers + '0';
      }
      var q6 = document.getElementById('wifi-yes') as HTMLInputElement;
      if(q6.checked){
        answers = answers + '1';
      } else{
        answers = answers + '0';
      }
      //Redirect based on answers
      var answerURL = "/solutions/" + answers;
      location.href = answerURL;
    });
  }
}
