import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemoComponent } from './memo/memo.component';
import { FirstPageComponent } from './first-page/first-page.component';

const routes: Routes = [
  { path: '', component: FirstPageComponent},
  { path: 'memo', component: MemoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
