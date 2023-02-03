import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhoAmIComponent } from './pages/who-am-i/who-am-i.component';

export const routerConfig: Routes = [
  {
    path: 'whoami',
    component: WhoAmIComponent
  },
]
@NgModule({
  imports: [RouterModule.forRoot(routerConfig)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
