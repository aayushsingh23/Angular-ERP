import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewRegisterationComponent } from './new-registeration/new-registeration.component';
import { ExistingUserComponent } from './existing-user/existing-user.component';
import { HomeComponent } from './home/home.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

const routes: Routes = [
  {path: 'new-regiteration', component: NewRegisterationComponent},
  {path: 'existing-user', component: ExistingUserComponent},
  {path:'home',component:HomeComponent},
  {path:'employeeList',component:EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[NewRegisterationComponent,ExistingUserComponent,EmployeeListComponent,HomeComponent]