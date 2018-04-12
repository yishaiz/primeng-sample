import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { PanelModule }   from 'primeng/panel';


import { AppComponent }                     from './app.component';
import { SettingsComponent }                from './settings/settings.component';
import { MenuModule }                       from "primeng/menu";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule }                 from "@angular/common/http";
import { BrowserAnimationsModule }          from "@angular/platform-browser/animations";


@NgModule({
    declarations : [
        AppComponent,
        SettingsComponent
    ],
    imports : [
        BrowserModule,
        BrowserAnimationsModule,
        PanelModule,
        MenuModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers : [],
    bootstrap : [ AppComponent ]
})
export class AppModule {
}
