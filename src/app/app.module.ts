import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { InscriptionDisabledDirective } from './inscription-disabled-directive.directive';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
const appRoutes: Routes = [
 {
 path: 'list',
 component: SessionItemListComponent},
 {
  path: 'admin',
  loadChildren: () => import('./admin/admin.module').then(x => x.AdminModule)
 },
 { path: '', redirectTo: '/list', pathMatch: 'full' },
 { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SessionItemComponent,
    SessionItemListComponent,
    InscriptionDisabledDirective,
    PagenotfoundComponent,
  ],
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true }
    ),
    BrowserModule,
    FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
