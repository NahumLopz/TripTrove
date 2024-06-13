import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';

import { SignInComponent } from './sign-in/sign-in.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UploadLocationsModule } from './UploadLocations/upload-locations.module';
import { MapsModule } from './maps/maps.module';
import { PlaceListUserComponent } from './place-list-user/place-list-user.component';
import { AndroidComponent } from './android/android.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    AboutComponent,
    DashboardComponent,
    HomeComponent,
    AndroidComponent,
    PlaceListUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    UploadLocationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    MapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
