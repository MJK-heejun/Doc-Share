import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { PageComponent } from './page/page.component';
import { ContentComponent } from './content/content.component';
import { EditorComponent } from './editor/editor.component';

const appRoutes: Routes = [
  //{ path: 'home', component: HomeComponent },
  { path: 'home', component: MenuComponent },
  { path: 'page/:id', component: ContentComponent },
  { path: 'page/:id/edit', component: EditorComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }, //redirect everything else
];



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    PageComponent,
    ContentComponent,
    EditorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
