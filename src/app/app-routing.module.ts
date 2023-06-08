import { EmplyoeeDashboardComponent } from './emplyoee-dashboard/emplyoee-dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddEMplyoeeComponent } from './add-emplyoee/add-emplyoee.component';

const routes: Routes = [
  { path: '', component: EmplyoeeDashboardComponent },
  { path: 'add-emp', component: AddEMplyoeeComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
