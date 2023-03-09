import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { CategoryComponent } from './category/category.component';
import { ManageCategoryComponent } from './category/manage-category/manage-category.component';
import { MyNewGuardGuard } from './my-new-guard.guard';
import { AuthorComponent } from './author/author.component';
import { ManageAuthorComponent } from './manage-author/manage-author.component';

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
    component:AdminComponent,
    canActivate: [MyNewGuardGuard]
  },


      {
        path:"add-category",
        component:CategoryComponent,
        canActivate: [MyNewGuardGuard]
   
       
      },
      {
        path:"manage-category",
        component:ManageCategoryComponent,
        canActivate: [MyNewGuardGuard]
      },
      {
        path:"auth",
        component:AuthorComponent,
        canActivate: [MyNewGuardGuard]
      },
      {
        path:"manage-author",
        component:ManageAuthorComponent,
        canActivate: [MyNewGuardGuard]
      }



    ]




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//ng generate component Login --skip-import