import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.css']
})
export class ConnectionComponent implements OnInit {

  //Attribute Directive
  attributeDirectiveNumber1 = Math.random();
  attributeDirectiveNumber2 = Math.random();
  attributeDirectiveStatus1 = this.attributeDirectiveNumber1 > 0.5 ? 'online' : 'offline';
  attributeDirectiveStatus2 = this.attributeDirectiveNumber2 > 0.5 ? 'online' : 'offline';

  getColorAttributeDirective1(){
    return this.attributeDirectiveStatus1 === 'online' ? 'green' : 'red';
  }

  getColorAttributeDirective2(){
    return this.attributeDirectiveStatus2 === 'online' ? 'green' : 'red';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
