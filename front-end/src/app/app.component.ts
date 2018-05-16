import { Component } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  messgaeError={email:[],name:[],password:[]};
  constructor(private spinnerService: Ng4LoadingSpinnerService) { }
  ngOnInit() {
  }
  onSignup(form: NgForm) {
    this.spinnerService.show();
    const email = form.value.email;
    const password = form.value.password;
    const username= form.value.username;
    
  }
}
