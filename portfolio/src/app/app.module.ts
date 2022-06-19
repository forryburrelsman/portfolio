import { NgModule, ViewEncapsulation } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppRoutingModule } from './app-routing.module';
import { WorkComponent } from './work/work.component';
import { EducationComponent } from './education/education.component';
import { HiddenGemsComponent } from './hidden-gems/hidden-gems.component';
import { BioComponent } from './bio/bio.component';


@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    WorkComponent,
    EducationComponent,
    HiddenGemsComponent,
    BioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }