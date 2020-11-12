import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdduserComponent } from './adduser/adduser.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { Adduser1Component } from './adduser1/adduser1.component';
import { ManagePersonalComponent } from './manage-personal/manage-personal.component';
import { ManageSystemRoleComponent } from './manage-system-role/manage-system-role.component';
import { OrganisationManagementComponent } from './organisation-management/organisation-management.component';
import { SummaryComponent } from './summary/summary.component';
import { TileManagementComponent } from './tile-management/tile-management.component';
import { AdminManagementComponent } from './admin-management/admin-management.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    AdduserComponent,
    LoginuserComponent,
    UsersComponent,
    Adduser1Component,
    ManagePersonalComponent,
    ManageSystemRoleComponent,
    OrganisationManagementComponent,
    SummaryComponent,
    TileManagementComponent,
    AdminManagementComponent,
    AnalyticsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
