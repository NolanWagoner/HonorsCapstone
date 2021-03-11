import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {

  answers: string | null;
  totalSolutions: number;
  totalSolutionsCompleted: number;
  progressValue = 0;
  //Enabling completion buttons by default
  pwSolutionCompletionDisabled = false;
  antivirusSolutionCompletionDisabled = false;
  updateSolutionCompletionDisabled = false;
  linksSolutionCompletionDisabled = false;
  lockingSolutionCompletionDisabled = false;
  wifiSolutionCompletionDisabled = false;

  constructor(private route: ActivatedRoute) {
    this.answers = "";
    this.totalSolutions = 0;
    this.totalSolutionsCompleted = 0;
  }

  ngOnInit(): void {
    this.answers = this.route.snapshot.paramMap.get('answers');
    var answerDiv = document.getElementById('answerDiv')
    //If no changes need to be made
    if (this.answers == "000000"){
      document.getElementById('no-recommendations')?.removeAttribute('hidden');
    }
    //Load recommendations based on answers to questions (yes = load recommendations by removing hidden attribute)
    if (this.answers?.charAt(0) == "1"){
      document.getElementById('pw-solution')?.removeAttribute('hidden');
      this.totalSolutions++;
    }
    if (this.answers?.charAt(1) == "1"){
      document.getElementById('antivirus-solution')?.removeAttribute('hidden');
      this.totalSolutions++;
    }
    if (this.answers?.charAt(2) == "1"){
      document.getElementById('update-solution')?.removeAttribute('hidden');
      this.totalSolutions++;
    }
    if (this.answers?.charAt(3) == "1"){
      document.getElementById('links-solution')?.removeAttribute('hidden');
      this.totalSolutions++;
    }
    if (this.answers?.charAt(4) == "1"){
      document.getElementById('locking-solution')?.removeAttribute('hidden');
      this.totalSolutions++;
    }
    if (this.answers?.charAt(5) == "1"){
      document.getElementById('wifi-solution')?.removeAttribute('hidden');
      this.totalSolutions++;
    }
  }

  //Change progress bar and disable button when done with a section of solutions
  onCompletionButtonClick(divId: number) {
    let percentageComplete = 0;
    //Disable buttons after clicked
    if(divId == 0){
      this.pwSolutionCompletionDisabled = true;
    } else if(divId == 1){
      this.antivirusSolutionCompletionDisabled = true;
    } else if(divId == 2){
      this.updateSolutionCompletionDisabled = true;
    } else if(divId == 3){
      this.linksSolutionCompletionDisabled = true;
    } else if(divId == 4){
      this.lockingSolutionCompletionDisabled = true;
    } else if(divId == 5){
      this.wifiSolutionCompletionDisabled = true;
    }
    //calculate percentage complete and update the progress bar
    this.totalSolutionsCompleted++;
    percentageComplete = (this.totalSolutionsCompleted / this.totalSolutions) * 100;
    this.progressValue = percentageComplete;
  }

}
