import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer/footer.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { NewpasteComponent } from './pastes/newpaste/newpaste.component';
import { ShowpasteComponent } from './pastes/showpaste/showpaste.component';
import { LatestpastesComponent } from './pastes/latestpastes/latestpastes.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { FormsModule } from '@angular/forms';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

import { ClipboardModule } from 'ngx-clipboard';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    NewpasteComponent,
    ShowpasteComponent,
    LatestpastesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    CodemirrorModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ClipboardModule,
    RouterModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
