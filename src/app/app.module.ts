import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as $ from 'jquery';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './page/home/home.component';
import { NavbarComponent } from './page/components/navbar/navbar.component';
import { FullCarouselComponent } from './page/components/full-carousel/full-carousel.component';
import { AboutComponent } from './page/components/about/about.component';
import { ProductSectionComponent } from './page/components/product-section/product-section.component';
import { ShoppingBannerComponent } from './page/components/shopping-banner/shopping-banner.component';
import { SuscriptionBannerComponent } from './page/components/suscription-banner/suscription-banner.component';
import { FooterComponent } from './page/components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FullCarouselComponent,
    AboutComponent,
    ProductSectionComponent,
    ShoppingBannerComponent,
    SuscriptionBannerComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    CarouselModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
