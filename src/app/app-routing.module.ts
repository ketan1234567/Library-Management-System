import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
   {
    path:"login",
    component:LoginComponent
   },
   {
    path:"user-signup",
    component:RegisterComponent
   },
   {
    path:"admin",
    component:AdminComponent
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//ng generate component Login --skip-import