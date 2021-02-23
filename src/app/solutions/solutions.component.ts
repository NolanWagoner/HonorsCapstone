import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {

  answers: string | null;

  constructor(private route: ActivatedRoute) {
    this.answers = "";
  }

  ngOnInit(): void {
    this.answers = this.route.snapshot.paramMap.get('answers');
    var answerDiv = document.getElementById('answerDiv')
    //If no changes need to be made
    if (this.answers == "000000"){
      var desc = document.createElement('p');
      desc.appendChild(document.createTextNode('You are secure! No recommendations could be made because you already follow basic security guidelines.'));
      answerDiv!.appendChild(desc);
    }
    //Load recommendations based on answers to questions (yes = load recommendations)
    if (this.answers?.charAt(0) == "1"){
      var desc = document.createElement('p');
      desc.appendChild(document.createTextNode('q1'));
      answerDiv!.appendChild(desc);
    }
    if (this.answers?.charAt(1) == "1"){
      var desc = document.createElement('p');
      desc.appendChild(document.createTextNode('q2'));
      answerDiv!.appendChild(desc);
    }
    if (this.answers?.charAt(2) == "1"){
      var desc = document.createElement('p');
      desc.appendChild(document.createTextNode('q3'));
      answerDiv!.appendChild(desc);
    }
    if (this.answers?.charAt(3) == "1"){
      var desc = document.createElement('p');
      desc.appendChild(document.createTextNode('q4'));
      answerDiv!.appendChild(desc);
    }
    if (this.answers?.charAt(4) == "1"){
      var desc = document.createElement('p');
      desc.appendChild(document.createTextNode('q5'));
      answerDiv!.appendChild(desc);
    }
    if (this.answers?.charAt(5) == "1"){
      var desc = document.createElement('p');
      desc.appendChild(document.createTextNode('q6'));
      answerDiv!.appendChild(desc);
    }
  }

}
