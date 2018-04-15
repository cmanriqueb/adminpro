import {RouterModule, Routes} from '@angular/router';

// RUTAS
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';
import { ProgressComponent } from './progress/progress.component';
import { Graph1Component } from './graph1/graph1.component';
import { PagesComponent } from './pages.component';
import { RegisterComponent } from '../login/register.component';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RsjxComponent } from './rsjx/rsjx.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard'} },
      { path: 'progress', component: ProgressComponent, data: { title: 'Progress Bar'}},
      { path: 'graph1', component: Graph1Component, data: { title: 'Graphics'}},
      { path: 'promises', component: PromisesComponent, data: { title: 'Promises'}},
      { path: 'rxjs', component: RsjxComponent, data: { title: 'RxJs'}},
      { path: 'account-settings', component: AccountSettingsComponent, data: { title: 'Theme Settings'}},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
