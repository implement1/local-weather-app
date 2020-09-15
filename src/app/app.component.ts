import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <div style ="text-align:center">
      <h1>
      <mat-toolbar color="primary">
      <span>LocalCast Weather</span>
  </mat-toolbar>
  </h1>
  <div> Your city, your forecast, right now!</div>
  <h2> Current Weather </h2>
  <app-current-weather></app-current-weather>
</div>
`,
})
export class AppComponent { }
