import { Component, OnInit } from '@angular/core';
import { OwlOptions , SlidesOutputData } from 'ngx-owl-carousel-o';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';

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
      name: 'Título 1',
      src: 'https://static.dezeen.com/uploads/2019/10/circulose-recycled-cotton-clothing-sustainable-fashion-stockholm-sweden_hero-a.jpg',
    },
    {
      id: 1,
      name: 'Título 2',
      src: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bugatti-chiron-pur-sport-106-1582836604.jpg',
    },
    {
      id: 2 ,
      name: 'Título 3',
      src: 'https://www.thespruce.com/thmb/WN4g3PxPz7VZGOD8fk10_kulSdI=/1800x1012/smart/filters:no_upscale()/how-to-remove-excessive-perfume-odors-2147116-Front-5947ef7388ba45efbc139d4f698dd226.jpg',
    },
    {
      id: 3,
      name: 'Título 4',
      src: 'https://www.cleanipedia.com/images/v2/41ed5a136e522890f7dea3eef9331eed-1800w-1200h.jpg',
    }
  ];

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
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
