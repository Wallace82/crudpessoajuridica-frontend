import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {CardModule} from 'primeng/card';
import {PaginatorModule} from 'primeng/paginator';
import {PanelModule} from 'primeng/panel';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputMaskModule} from 'primeng/inputmask';
import {ConfirmDialogModule} from 'primeng/confirmdialog';


import { MessagesModule } from 'primeng/messages';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,   
  ],
  exports: [ 
    CardModule,
    PaginatorModule,
    PanelModule,
    InputTextModule,
    ButtonModule,
    TableModule,
    DropdownModule,
    InputMaskModule,
    ConfirmDialogModule,
    MessagesModule
 ],
})
export class PrimengModule { }
