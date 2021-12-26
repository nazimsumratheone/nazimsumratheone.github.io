import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { TreeGridModule } from '@syncfusion/ej2-angular-treegrid';
import { DropDownListAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { PageService, FilterService, EditService, ToolbarService, FreezeService } from '@syncfusion/ej2-angular-treegrid';
import { SortService, ResizeService, ExcelExportService, PdfExportService, ContextMenuService, InfiniteScrollService } from '@syncfusion/ej2-angular-treegrid';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { ContextMenuModule } from '@syncfusion/ej2-angular-navigations';
import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
import { UserService } from './services/user.service';
import { DatePickerModule } from '@syncfusion/ej2-angular-calendars';
import { RadioButtonModule, CheckBoxModule } from '@syncfusion/ej2-angular-buttons';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // HttpModule,
    HttpClientModule,
    TreeGridModule,
    DropDownListAllModule,
    DialogModule,
    ContextMenuModule,
    ButtonModule,
    DatePickerModule,
    RadioButtonModule,
    CheckBoxModule,
    NgbModule
  ],
  providers: [PageService,
    SortService,
    FilterService,
    EditService,
    SortService, ResizeService,
    ExcelExportService,
    PdfExportService, ContextMenuService,
    ToolbarService,
    FreezeService,
    InfiniteScrollService],
  bootstrap: [AppComponent, UserService]
})
export class AppModule { }
