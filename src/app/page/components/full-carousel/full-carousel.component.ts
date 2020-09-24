import { Component, OnInit } from '@angular/core';
import { OwlOptions , SlidesOutputData } from 'ngx-owl-carousel-o';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'full-carousel',
  templateUrl: './full-carousel.component.html',
  styleUrls: ['./full-carousel.component.sass']
})
export class FullCarouselComponent implements OnInit {
  
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'thumbs-up',
        sanitizer.bypassSecurityTrustResourceUrl('assets/img/examples/thumbup-icon.svg'));
  }

  images:any [] = [
    {
      id: 0,
      logo: 'Logo',
      title: 'Título 1',
      src: 'https://www.thespruce.com/thmb/WN4g3PxPz7VZGOD8fk10_kulSdI=/1800x1012/smart/filters:no_upscale()/how-to-remove-excessive-perfume-odors-2147116-Front-5947ef7388ba45efbc139d4f698dd226.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
    {
      id: 1,
      logo: 'Logo',
      title: 'Título 2',
      src: 'https://www.teknofilo.com/wp-content/uploads/2017/01/Minimalist-smartphone-wallpapers_021.jpg',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
  ];

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 800,
    navText : [
      '<img class="arrow_lf" src="./assets/images/arrow-down.png" alt="">',
      '<img class="arrow_rg" src="./assets/images/arrow-down.png" alt="">'],
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
  }

  activeSlides: SlidesOutputData;

  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;
    console.log(this.activeSlides);
  }

  ngOnInit(): void {
  }

}
