import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './services/appareil.service';
import { AuthService } from './services/auth.service';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuardService } from './services/auth-guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';
import { NewUserComponent } from './new-user/new-user.component';


const appRoutes : Routes = [
  { path : 'appareils', canActivate: [AuthGuardService],component: AppareilViewComponent},
  { path : 'appareils/:id', canActivate: [AuthGuardService],component: SingleAppareilComponent},
  { path: 'edit', canActivate: [AuthGuardService], component: EditAppareilComponent },
  { path : 'auth', component : AuthComponent},
  { path: 'users', component: UserListComponent },
  { path: 'new-user', component: NewUserComponent },
  { path : '', canActivate: [AuthGuardService],component: AppareilViewComponent},
  { path : 'not-found', component: FourOhFourComponent},
  { path : '**', redirectTo:'/not-found'}
]

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    AppareilViewComponent,
    AppareilComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuardService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }