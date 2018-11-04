import { Component, OnInit, NgZone, HostListener } from '@angular/core';
import { Router } from '@angular/router';

declare let $: any;
declare let window: any;

@Component({
  selector: 'app-cab-directions',
  templateUrl: './cab-directions.component.html',
  styleUrls: ['./cab-directions.component.less']
})
export class CabDirectionsComponent implements OnInit {

  origin : any = {};
  destination : any = {};
  showDirections: boolean;
  address: string;
  distance: string;


  constructor(private ngZone: NgZone, private router: Router) { 
    this.onResize();
  }

  @HostListener('window:resize', ['$event'])
onResize(event?) {
  $('agm-map').css('height', Number(window.innerHeight) - (0.3 * Number(window.innerHeight)));
}

  ngOnInit() {
    let origin = JSON.parse(sessionStorage.getItem('cab'));
    this.origin = { lat: origin.coordinates[1], lng: origin.coordinates[0] };
    window.my = window.my || {},
      window.my.namespace = window.my.namespace || {},
      window.my.namespace.getLatLng = this.showDirectionsOnMap.bind(this);
      this.onResize();
  }

  showDirectionsOnMap(e) {
    $('#showmaps').css('display', 'unset');
    this.destination = { lat: e.geometry.location.lat(), lng: e.geometry.location.lng() };
    this.calculateDistance();
    this.ngZone.run(() => { });
  }

  setDestination() {
    this.getGeoLocation(this.address);
  }

  getGeoLocation(address: string) {
    let geocoder = new google.maps.Geocoder();
    if (geocoder) {
      geocoder.geocode({
        'address': address
      }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          window.my.namespace.getLatLng(results[0]);
        }
      });
    }

  }

  calculateDistance() {
    let place1 = new google.maps.LatLng(this.origin.lat, this.origin.lng);
    let place2 = new google.maps.LatLng(this.destination.lat, this.destination.lng);
    this.distance = (Number(google.maps.geometry.spherical.computeDistanceBetween(place1, place2))/1000).toFixed(2);    
  }

  goback() {
    this.router.navigate(['/search-cabs']);
  }

}
