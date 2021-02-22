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
    document.getElementById("main-submit")!!.addEventListener("click", function(event){
      //Prevents the default submit action
      event.preventDefault()
    });
  }
}
