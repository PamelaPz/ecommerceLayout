import { Component, OnInit } from '@angular/core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'suscription-banner',
  templateUrl: './suscription-banner.component.html',
  styleUrls: ['./suscription-banner.component.sass']
})
export class SuscriptionBannerComponent implements OnInit {
  
  faEnvelope = faEnvelope;
  
  constructor() { }

  ngOnInit(): void {
  }

}
