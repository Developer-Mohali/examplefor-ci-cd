import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { FileUploadComponent } from './file-upload/file-upload.component';
import { LinechartsComponent } from './linecharts/linecharts.component';

const routes: Routes = [
  {
    path:'line',
    component:LinechartsComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
