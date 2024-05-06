import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructorComponent } from './instructor/instructor.component';
import { AddInstructorComponent } from './add-or-update-instructor/add-or-update-instructor.component';

const routes: Routes = [
  { path: '', redirectTo: 'instructor', pathMatch: 'full' },
  { path: 'instructor', component: InstructorComponent },
  { path: 'add', component: AddInstructorComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
