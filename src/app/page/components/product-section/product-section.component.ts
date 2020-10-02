import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-section',
  templateUrl: './product-section.component.html',
  styleUrls: ['./product-section.component.sass']
})
export class ProductSectionComponent implements OnInit {

  ngOnInit(): void {
    var $table = $('.table-wrapper table');

    var leftTimeout, left = $('.left');

    function scrollLeft(){
      $('.table-wrapper').scrollLeft($('.table-wrapper').scrollLeft()-400);
      $.each($table.find('tr'),function(){
        $(this).children().last().detach().prependTo(this);
      });
    }

    left.mousedown(function(){
      scrollLeft();
        leftTimeout = setInterval(function(){
          scrollLeft();
        }, 500);

        return false;
    });
    $(document).mouseup(function(){
        clearInterval(leftTimeout);
        return false;
    });

    var rightTimeout, right = $('.right');

    function scrollRight(){
      $('.table-wrapper').scrollLeft($('.table-wrapper').scrollLeft()+400);
      $.each($table.find('tr'),function(){
        $(this).children().first().detach().appendTo(this);
      });
    }

    right.mousedown(function(){
      scrollRight();
        leftTimeout = setInterval(function(){
          scrollRight();
        }, 500);

        return false;
    });
    $(document).mouseup(function(){
        clearInterval(rightTimeout);
        return false;
    });
  }

}
