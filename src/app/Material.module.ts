import { NgModule } from "@angular/core";
import{MatCardModule} from "@angular/material/card";
import{MatError, MatFormFieldModule} from "@angular/material/form-field";
import{MatInputModule} from "@angular/material/input";
import{MatButtonModule} from "@angular/material/button";
import{MatTableModule} from "@angular/material/table";
import{MatPaginatorModule} from "@angular/material/paginator";
import{MatDialogModule} from "@angular/material/dialog";
import{MatSelectModule} from "@angular/material/select";
import{MatCheckboxModule} from "@angular/material/checkbox";
import { ReactiveFormsModule } from "@angular/forms";
import { FormsModule } from "@angular/forms";


@NgModule({
    exports:[
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule,
        MatPaginatorModule,
        MatDialogModule,
        MatCheckboxModule,
        MatSelectModule,
        ReactiveFormsModule,
        FormsModule,


    
    ]
})
export class MaterialModule{

}