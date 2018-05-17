import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MaterialModule } from './/material.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductResumeComponent } from './product-resume/product-resume.component';
import { SearchBarComponent } from './search-bar/search-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SidenavComponent,
    ProductListComponent,
    ProductDetailsComponent,
    ProductResumeComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    FormsModule
  ],
  providers: [MediaMatcher],
  bootstrap: [AppComponent]
})
export class AppModule { }
