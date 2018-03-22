import {RouterModule, Routes} from '@angular/router';

// RUTAS
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';
import { ProgressComponent } from './progress/progress.component';
import { Graph1Component } from './graph1/graph1.component';
import { PagesComponent } from './pages.component';
import { RegisterComponent } from '../login/register.component';
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent},
      { path: 'progress', component: ProgressComponent},
      { path: 'graph1', component: Graph1Component},
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);