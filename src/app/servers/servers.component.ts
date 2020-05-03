import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //use external file html
  // templateUrl: './servers.component.html',
  //use inline html
  template: `
    <div class = "container">
      <div class = "row">
        <div class = "col-xl-12">
          <p>inline html servers works!</p>
          <!-- selector as element
          <app-server></app-server>
          <app-server></app-server> -->
          <!-- selector as attribute
          <div app-server></div>
          <div app-server></div>-->
          <!-- selector as class -->
          <div class = "app-server"></div>
        </div>
      </div>
    </div>
  `,
  //use external file css
  // styleUrls: ['./servers.component.css']
  //use internal/inline css
  styles: [`
    p{
      color: deeppink;
    }
  `]
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
