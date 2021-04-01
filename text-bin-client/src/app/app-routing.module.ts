import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NewpasteComponent } from './pastes/newpaste/newpaste.component';
import { ShowpasteComponent } from './pastes/showpaste/showpaste.component';
import { LatestpastesComponent } from './pastes/latestpastes/latestpastes.component';

const routes: Routes = [
  {path: '', component: NewpasteComponent },
  {path: 'latest', component: LatestpastesComponent },
  {path: 'get/:id', component: ShowpasteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
