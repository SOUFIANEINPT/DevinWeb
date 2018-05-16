import { Component } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NgForm } from '@angular/forms';
import { SendDataService } from './services/send-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  messgaeError={email:[],name:[],password:[]};
myFile:File;
  constructor(private spinnerService: Ng4LoadingSpinnerService ,private sendData:SendDataService) { }
  ngOnInit() {
  }
  
fileChange(files: any){
    console.log(files);

    this.myFile = files[0].nativeElement;
}
  onSignup(form: NgForm) {
    this.spinnerService.show();
    const email = form.value.email;
    const password = form.value.password;
    const username= form.value.username;
    if (!this.validateFile(this.myFile.name)) {
      console.log('Selected file format is not supported');
      return false;
  }
    let formData = new FormData();
    formData.append("Name", email);
    formData.append("Password", password);
    formData.append("username", username);
    formData.append("MyFile", this.myFile);
    this.sendData.Send(formData).subscribe(data=>{
      console.log("data",data)

    },
  error=>{
    
  });
    
  }
  validateFile(name: String) {
    var ext = name.substring(name.lastIndexOf('.') + 1);
    if (ext.toLowerCase() == 'png'||ext.toLowerCase() == 'bmp'||ext.toLowerCase()=="jpg"||ext.toLowerCase() == 'gif') {
        return true;
    }
    else {
        return false;
    }
}

}
