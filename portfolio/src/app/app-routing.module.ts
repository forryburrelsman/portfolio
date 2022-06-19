import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectsComponent} from './projects/projects.component';
import { WorkComponent } from './work/work.component';
import { EducationComponent } from './education/education.component';
import { HiddenGemsComponent } from './hidden-gems/hidden-gems.component';
import { BioComponent } from './bio/bio.component';

const routes: Routes = [
  { path: 'projects', component: ProjectsComponent },
  { path: 'work', component: WorkComponent},
  { path: 'education', component: EducationComponent},
  { path: 'hiddengems', component: HiddenGemsComponent},
  {path: 'bio', component: BioComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }