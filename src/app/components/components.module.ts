import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DonnaComponent } from './donna/donna.component';
import { IncrementadorComponent } from './incrementador/incrementador.component';

import { NgChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    IncrementadorComponent,
    DonnaComponent
  ],
  exports:[
    IncrementadorComponent,
    DonnaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule
  ],
})
export class ComponentsModule { }
