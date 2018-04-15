import { Component, OnInit } from '@angular/core';
// import { Panel } from 'primeng/primeng';


@Component({
  selector: 'app-settings',
  template: ` 
     <!-- <p-panel header="Title">
          Content
      </p-panel>-->

<!--     <p-panel >
         <p-header>
             Header content here
         </p-header>
         Body Content
         <p-footer>
             Footer content here
         </p-footer>
     </p-panel>
     
     <hr>-->

      <p-panel header="Settings">
          
      </p-panel>
      

  `,
  styles: []
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
