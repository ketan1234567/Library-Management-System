import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './Material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { CategoryComponent } from './category/category.component';
import { ManageCategoryComponent } from './category/manage-category/manage-category.component';
import { UserAuthService } from './user/user-auth.service';
import { MyNewGuardGuard } from './my-new-guard.guard';
import { ModalpopupComponent } from './modalpopup/modalpopup.component';
import { AuthorComponent } from './author/author.component';
import { ManageAuthorComponent } from './manage-author/manage-author.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    CategoryComponent,
    ManageCategoryComponent,
    ModalpopupComponent,
   AuthorComponent,
   ManageAuthorComponent,
   ManageAuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UserAuthService,
    MyNewGuardGuard

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
