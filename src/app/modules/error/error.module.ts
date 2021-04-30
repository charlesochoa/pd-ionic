import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { ErrorPage } from "./error.page";

@NgModule({
    imports: [
      IonicModule,
      CommonModule,
      FormsModule,
      RouterModule.forChild([{ path: '', component: ErrorPage }])
    ],
    declarations: [ErrorPage]
  })
export class ErrorPageModule {

}