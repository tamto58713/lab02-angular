import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './lab02/students/students.component'
import { DetailStudentComponent} from './lab02/detail-student/detail-student.component'
import { WrongPathComponent } from './wrong-path/wrong-path.component'
import { Exercise01Component } from './lab01/exercise01/exercise01.component';
import { Exercise02Component } from './lab01/exercise02/exercise02.component';
import { Exercise03Component } from './lab01/exercise03/exercise03.component';
import { Exercise03CartComponent } from './lab01/exercise03-cart/exercise03-cart.component';
import { HomePageComponent } from './lab01/home-page/home-page.component';
import { Exercise05Component } from './lab01/exercise05/exercise05.component';
import { Exercise04Component } from './lab01/exercise04/exercise04.component';
import { Exercise04DetailProductComponent } from './lab01/exercise04-detail-product/exercise04-detail-product.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HomeLab03Component } from './lab03/home-lab03/home-lab03.component';
import { DatailProductComponent} from './lab03/datail-product/datail-product.component'
import { Sen101Component } from './lab05/sen101/sen101.component';
import { HomeLab05Component } from './lab05/home-lab05/home-lab05.component';
import { Sen102Component } from './lab05/sen102/sen102.component';
import { Sen2Component } from './lab05/sen2/sen2.component';
import { Sen3Component } from './lab05/sen3/sen3.component';
import { Sen4Component } from './lab05/sen4/sen4.component';
const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'lab01', component: HomePageComponent},
  { path: 'lab01/exercise/1', component: Exercise01Component},
  { path: 'lab01/exercise/2', component: Exercise02Component},
  { path: 'lab01/exercise/3', component: Exercise03Component},
  { path: 'lab01/exercise/3/cart', component: Exercise03CartComponent},
  { path: 'lab01/exercise/4', component: Exercise04Component},
  { path: 'lab01/exercise/4/products/:productId', component: Exercise04DetailProductComponent},
  { path: 'lab01/exercise/5', component: Exercise05Component},
  { path: 'lab02', component: StudentsComponent},
  { path: 'lab02/student/:id', component: DetailStudentComponent},
  { path: 'lab03', component: HomeLab03Component},
  { path: 'lab03/product/:id', component: DatailProductComponent},
  { path: 'lab05', component: HomeLab05Component},
  { path: 'lab05/exercise/1.1', component: Sen101Component},
  { path: 'lab05/exercise/1.2', component: Sen102Component},
  { path: 'lab05/exercise/2', component: Sen2Component},
  { path: 'lab05/exercise/3', component: Sen3Component},
  { path: 'lab05/exercise/4', component: Sen4Component},
  { path: '**', component: WrongPathComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
