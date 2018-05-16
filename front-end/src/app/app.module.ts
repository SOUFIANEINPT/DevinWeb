import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule,HttpClient} from '@angular/common/http';
import { HttpModule} from '@angular/http';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { SendDataService } from './services/send-data.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule.forRoot(),
    Ng4LoadingSpinnerModule.forRoot() 
  ],
  providers: [SendDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
