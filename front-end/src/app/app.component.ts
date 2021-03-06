import { Component } from '@angular/core';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { NgForm } from '@angular/forms';
import { SendDataService } from './services/send-data.service';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  messgaeError={email:[],name:[],password:[]};
myFile:File;
fileselect:boolean=false;
  constructor(private spinnerService: Ng4LoadingSpinnerService ,private sendData:SendDataService,
    private flashMessagesService: FlashMessagesService) { }
  ngOnInit() {
  }
  
  fileEvent($event){
    console.log( $event.target.files[0]);
        this.fileselect=true;
        this.myFile = $event.target.files[0];
}
  onSignup(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    const username= form.value.username;
    if (!this.validateFile(this.myFile.name)) {
      console.log('Selected file format is not supported');
      this.flashMessagesService.show('Selected file format is not supported'
        , { cssClass: 'alert-danger', timeout: 1000 });
      return false;
  }
  else
  {
    let formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    formData.append("name", username);
    formData.append("image", this.myFile,this.myFile.name);
    this.sendData.Send(formData).subscribe(data=>{
      this.spinnerService.hide();
      console.log("data",data)
      this.flashMessagesService.show("Data Sended"
        , { cssClass: 'alert-success', timeout: 3000 });

    },
  error=>{
    this.spinnerService.hide(); 
    console.log("error",error.error)
    
    //this.messgaeError=error.error.errors;
    this.flashMessagesService.show(error.error.errors
      .email[0]
      , { cssClass: 'alert-danger', timeout: 3000 });
  });
} 
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
