import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';


import { HomeComponent } from './home/home.component';
import { BarComponent } from './bar/bar.component';
import { FooComponent } from './foo/foo.component';
import { TheRollingStonesComponent } from './the-rolling-stones/the-rolling-stones.component';
import { TheBeatlesComponent } from './the-beatles/the-beatles.component';
import { QueenComponent } from './queen/queen.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const appRoutes: Routes = [

{path: '', component: HomeComponent},
{path: 'bar', component: BarComponent},
{path: 'foo', component: FooComponent},
{path: 'the-rolling-stones', component: TheRollingStonesComponent},
{path: 'the-beatles', component: TheBeatlesComponent},
{path: 'queen', component: QueenComponent},
{path: 'header', component: HeaderComponent},
{path: 'footer', component: FooterComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BarComponent,
    FooComponent,
    TheRollingStonesComponent,
    TheBeatlesComponent,
    QueenComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
