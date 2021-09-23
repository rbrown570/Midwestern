import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/_services/app.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  cards: any;
  clickedPuzzle = false;
  objOne = [
     "Matt Johnson",
     "Bart Paden",
     "Ryan Doss",
     "Jared Malcolm"
  ]; 
  objTwo = [
     "Matt Johnson",
     "Bart Paden",
     "Jordan Heigle",
     "Tyler Viles"
  ]; 
  uniqueObj : string[] = [];
  constructor(private appService: AppService, private router: Router) { }

  ngOnInit(): void {
    this.getCards();
  }
  getCards() {
    this.appService.getCards().subscribe(response => {
      this.cards = response;
    }, error => {
      console.log(error);
    })
  }
  solvePuzzle(){
    if(this.clickedPuzzle){
      alert("You already clicked this");
    }
    else{
      var objThree = this.objOne.concat(this.objTwo);
    objThree = objThree.filter(function (item, index) {
      return objThree.indexOf(item) === index;
    });
    this.clickedPuzzle = true;
    this.uniqueObj = objThree;
    console.log(objThree);
    }
  
  }
}
