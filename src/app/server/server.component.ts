import {Component} from '@angular/core';

@Component({
  //selector as element
  // selector: 'app-server',
  //selector as attribute
  // selector: '[app-server]',
  //selector as class
  selector: '.app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})

export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';
  allowedButton = false;
  serverCreationStatus = 'No Server Creation !';
  updateServerCreation = 'Data will not read in Passing and Using Data with Event Binding';
  inputServerName = '';
  combiningServerName = 'Default Server Name';
  combiningServerCreationStatus = this.serverCreationStatus;
  directivesNgIf = false;


  constructor() {
    setTimeout(() => {
      this.allowedButton = true;
    }, 2000);
  }

  getServerStatus(){
    return this.serverStatus;
  }

  onServerCreation(){
    this.serverCreationStatus = 'Server Created!';
  }

  onUpdateServerCreation(event: Event){
    this.updateServerCreation = (<HTMLInputElement>event.target).value;
  }

  onCombiningServerCreationAndStatus(){
    this.combiningServerCreationStatus = 'Server Created!';
    this.combiningServerName = this.inputServerName;
    this.directivesNgIf = true;
  }

}
