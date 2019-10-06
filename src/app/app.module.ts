import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter'
import {FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './lab02/students/students.component';
import { DetailStudentComponent } from './lab02/detail-student/detail-student.component';
import { WrongPathComponent } from './wrong-path/wrong-path.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { RatingModule } from 'ng-starrating'
import { HomePageComponent } from './lab01/home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Exercise01Component } from './lab01/exercise01/exercise01.component';
import { Exercise02Component } from './lab01/exercise02/exercise02.component';
import { Exercise03CartComponent } from './lab01/exercise03-cart/exercise03-cart.component';
import { Exercise03Component } from './lab01/exercise03/exercise03.component';
import { Exercise04Component } from './lab01/exercise04/exercise04.component';
import { Exercise04DetailProductComponent } from './lab01/exercise04-detail-product/exercise04-detail-product.component';
import { Exercise05Component } from './lab01/exercise05/exercise05.component';
import { NavHeaderExercise03Component } from './lab01/nav-header-exercise03/nav-header-exercise03.component';
import { NavChangeExerciseComponent } from './lab01/nav-change-exercise/nav-change-exercise.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NavLab03Component } from './lab03/nav-lab03/nav-lab03.component';
import { HomeLab03Component } from './lab03/home-lab03/home-lab03.component';
import { DatailProductComponent } from './lab03/datail-product/datail-product.component';
import { SideBarLab03Component } from './lab03/side-bar-lab03/side-bar-lab03.component';
import { Sen101Component } from './lab05/sen101/sen101.component';
import { ChangeExLab05Component } from './lab05/change-ex-lab05/change-ex-lab05.component';
import { HomeLab05Component } from './lab05/home-lab05/home-lab05.component';
import { Sen102Component } from './lab05/sen102/sen102.component';
import { Sen2Component } from './lab05/sen2/sen2.component';
import { Sen3Component } from './lab05/sen3/sen3.component';
import { Sen4Component } from './lab05/sen4/sen4.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    DetailStudentComponent,
    WrongPathComponent,
    HomePageComponent,
    NavBarComponent,
    Exercise01Component,
    Exercise02Component,
    Exercise03CartComponent,
    Exercise03Component,
    Exercise04Component,
    Exercise04DetailProductComponent,
    Exercise05Component,
    NavHeaderExercise03Component,
    NavChangeExerciseComponent,
    HomeComponent,
    AboutComponent,
    NavLab03Component,
    HomeLab03Component,
    DatailProductComponent,
    SideBarLab03Component,
    Sen101Component,
    ChangeExLab05Component,
    HomeLab05Component,
    Sen102Component,
    Sen2Component,
    Sen3Component,
    Sen4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule,
    RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
