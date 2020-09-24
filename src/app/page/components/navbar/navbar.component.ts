import { Component, OnInit } from '@angular/core';
import { faHeart, faUser, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  faUser = faUser;
  faHeart = faHeart;
  faShoppingCart = faShoppingCart;
  faSearch = faSearch;

  public isMenuCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
