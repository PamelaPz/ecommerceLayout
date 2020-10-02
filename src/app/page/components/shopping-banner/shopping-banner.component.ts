import { Component, OnInit } from '@angular/core';
import { faTruck, faCreditCard, faAddressCard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'shopping-banner',
  templateUrl: './shopping-banner.component.html',
  styleUrls: ['./shopping-banner.component.sass']
})
export class ShoppingBannerComponent implements OnInit {

  faTruck = faTruck;
  faCreditCard = faCreditCard;
  faAddressCard = faAddressCard;

  constructor() { }

  ngOnInit(): void {
  }

}
