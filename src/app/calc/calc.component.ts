import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
  public number1 : number;
  public number2 : number;
  public result : number;
 
  public mas(){
      this.result = this.number1 + this.number2
  }
  public menos(){
    this.result = this.number1 - this.number2
  }
  public por(){
    this.result = this.number1 * this.number2
  }
  public div(){
    this.result = this.number1 / this.number2
  }

  constructor() { }

  ngOnInit() {
  }

}
