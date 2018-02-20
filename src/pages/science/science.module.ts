import { NgModule } from "@angular/core";
import { OtherPage } from "./other";
import { IonicPageModule } from "ionic-angular";

@NgModule({
    declarations: [
      OtherPage,
    ],
    imports: [
      IonicPageModule.forChild(OtherPage),
    ],
  })
  export class OtherPageModule {}