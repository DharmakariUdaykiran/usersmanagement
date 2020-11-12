import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { Adduser1Component } from './adduser1/adduser1.component';
import { AdminManagementComponent } from './admin-management/admin-management.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginuserComponent} from './loginuser/loginuser.component'
import { ManagePersonalComponent } from './manage-personal/manage-personal.component';
import { ManageSystemRoleComponent } from './manage-system-role/manage-system-role.component';
import { OrganisationManagementComponent } from './organisation-management/organisation-management.component';
import { SummaryComponent } from './summary/summary.component';
import { TileManagementComponent } from './tile-management/tile-management.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [{path:'',redirectTo:'login',pathMatch:'full'},
{ path:'login', component:LoginuserComponent},
{ path:'users', component:UsersComponent},
{path:'adduser',component:AdduserComponent},
{path:'adduser1',component:Adduser1Component},
{path:'dashboard',component:DashboardComponent},
{path:'analytics',component:AnalyticsComponent},
{path:'tile_management',component:TileManagementComponent},
{path:'organisation_management',component:OrganisationManagementComponent},
{path:'admin_management',component:AdminManagementComponent},
{path:'summary',component:SummaryComponent},
{path:'manage_personal',component:ManagePersonalComponent},
{path:'manage_system_role',component:ManageSystemRoleComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
