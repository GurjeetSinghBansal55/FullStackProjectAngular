import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllusersComponent } from './allusers/allusers.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { SerachComponent } from './serach/serach.component';

const routes: Routes = [
  {
    path:'', redirectTo:"normalproject", pathMatch:"full"
  },
  {
    path:'search',
    component: SerachComponent
  },
  {
    path:'allusers',
    component: AllusersComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path:'normalproject',
    component: HomeComponent
  },
  {
    path:'**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
