import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('myanimation',[
       state('smaller',style({
          transform : 'translateY(100px)'
       })),
       state('larger',style({
          transform : 'translateY(0px)'
       })),
       transition('smaller <=> larger',animate('300ms ease-in'))
    ])
 ]
})
export class HomeComponent {

  state1: string = "smaller";
  state2: string = "smaller";
  state3: string = "smaller";
   animate() {
      this.state1= this.state1 == 'larger' ? 'smaller' : 'larger';
   }
   animate2() {
    this.state2= this.state2 == 'larger' ? 'smaller' : 'larger';
 }
 animate3() {
  this.state3= this.state3 == 'larger' ? 'smaller' : 'larger';
}
}
