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
    $(document).ready(function(){
      $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 300) {
          $(".navbar").css("background-color" , "rgba(255,255,255,0.9)");
        }
        else{
          $(".navbar").css("background" , "transparent");
        }
      })
    })
  }

}
