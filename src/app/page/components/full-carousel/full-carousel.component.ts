import { Component, OnInit } from '@angular/core';
import { OwlOptions , SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'full-carousel',
  templateUrl: './full-carousel.component.html',
  styleUrls: ['./full-carousel.component.sass']
})
export class FullCarouselComponent implements OnInit {

  images:any [] = [
    {
      id: 0,
      name: 'Título 1',
      src: 'https://cdn-mw.niceshops.com/upload/image/product/large/default/glascard-cuadro-de-cristal-paraiso-natural-453403-es.jpg',
    },
    {
      id: 1,
      name: 'Título 2',
      src: 'https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images.jpg',
    },
    {
      id: 2 ,
      name: 'Título 3',
      src: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/aaa19b6d-9b17-48ad-891e-783a5af30121/d2yasvc-b7977a39-b691-4183-92a8-c85f8871f110.jpg',
    },
    {
      id: 3,
      name: 'Título 4',
      src: 'https://i.imgur.com/34nX0uU.jpg',
    }
  ];

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText : ['<','>'],
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
