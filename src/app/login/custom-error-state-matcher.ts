import { ErrorStateMatcher } from "@angular/material/core";
import { AbstractControl, FormControl,FormGroupDirective,NgForm } from "@angular/forms";


export class CustomErrorStateMatcher implements ErrorStateMatcher {
   isErrorState(control: FormControl | any, form: FormGroupDirective | NgForm | any): boolean {
     const isSubmitted = form && form.submitted;
     return (control.invalid && (control.dirty || control.touched || isSubmitted));
   }
} 