import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { AssociateComponent } from './associate/associate.component';
import { AndroidComponent } from './android/android.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [ 
  { path: 'signUp', component: SignUpComponent},
  { path: 'signIn', component: SignInComponent},
  { path: 'about', component: AboutComponent},
  { path: 'android', component: AndroidComponent},
  { path: 'associate', component: AssociateComponent},
  { path: 'home', component: DashboardComponent},
  { path: '', component: HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
