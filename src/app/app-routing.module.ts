import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component'
import { DetailStudentComponent} from './detail-student/detail-student.component'
import { WrongPathComponent } from './wrong-path/wrong-path.component'

const routes: Routes = [
  { path: '', component: StudentsComponent},
  { path: 'student/:id', component: DetailStudentComponent},
  { path: "**", component: WrongPathComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
