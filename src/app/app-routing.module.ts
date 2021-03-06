import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RepoDisplayComponent } from './repo-display/repo-display.component';
import { UserDetailsComponent} from './user-details/user-details.component';

const routes: Routes = [
  {path: '', component: LandingComponent},
  {path: 'user', component: LandingComponent},
  {path: 'user/:username', component: UserDetailsComponent},
  {path: 'repo', component: RepoDisplayComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
