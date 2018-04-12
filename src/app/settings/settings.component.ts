import { Component, OnInit } from '@angular/core';
// import { Panel } from 'primeng/primeng';


@Component({
  selector: 'app-settings',
  template: ` 
      <p-panel header="Title">
          Content
      </p-panel>

  `,
  styles: []
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
