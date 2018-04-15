import { BrowserModule } from '@angular/platform-browser';
import { NgModule }      from '@angular/core';
import { PanelModule }   from 'primeng/panel';


import { AppComponent }                     from './app/app.component';
import { SettingsComponent }                from './settings/settings.component';
import { MenuModule }                       from "primeng/menu";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule }                 from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DashboardComponent }      from './dashboard/dashboard.component';
import { AlltimesComponent }       from './alltimes/alltimes.component';
import { TimesheetComponent }      from './timesheet/timesheet.component';
import { ProjectsComponent }       from './projects/projects.component';
import { ProfileComponent }        from './profile/profile.component';
import { RouterModule, Routes }    from "@angular/router";
// import { PanelSampleComponent } from './panel-sample/panel-sample.component';


const appRoutes : Routes = [
    { path : "", redirectTo : "/dashboard", pathMatch : "full" },
    { path : "dashboard", component : DashboardComponent },
    { path : "alltimes", component : AlltimesComponent },
    { path : "timesheet", component : TimesheetComponent },
    { path : "projects", component : ProjectsComponent },
    { path : "profile", component : ProfileComponent },
    { path : "settings", component : SettingsComponent },
];


@NgModule({
    declarations : [
        AppComponent,
        SettingsComponent,
        DashboardComponent,
        AlltimesComponent,
        TimesheetComponent,
        ProjectsComponent,
        ProfileComponent,
        // PanelSampleComponent,

    ],
    imports : [
        BrowserModule,
        BrowserAnimationsModule,
        PanelModule,
        MenuModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers : [],
    bootstrap : [ AppComponent ]
})
export class AppModule {
}
