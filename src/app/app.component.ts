import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-shell></app-shell>',
  styleUrls: []
})
export class AppComponent {

  constructor(){
    console.log('constructor')
  }

  ngOnInit(){
    console.log('ngOnInit')
  }

  ngDoCheck(){
    // console.log('ngDoCheck')
  }

  ngOnDestroy(){
    console.log('ngOnDestroy')
  }
}
