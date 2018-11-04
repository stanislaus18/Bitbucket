import { Component, OnInit, HostListener, NgZone } from '@angular/core';
import { LocationService } from 'src/app/services/app-cars-services';
import { Router } from '@angular/router';

declare let $: any;
declare let window: any;


@Component({
  selector: 'app-app-cabs-maps',
  templateUrl: './app-cabs-maps.component.html',
  styleUrls: ['./app-cabs-maps.component.less']
})
export class AppCabsMapsComponent implements OnInit {
  
  openedWindow: number = 0;
  lat: any;
  lng: any;
  cars: any;
  address: string;

@HostListener('window:resize', ['$event'])
onResize(event?) {
  $('agm-map').css('height', Number(window.innerHeight) - (0.2 * Number(window.innerHeight)));
}

  
  title = 'app-cars';
  
  iconurl = {
    url: './assets/car.png',
    scaledSize: {
      width: 35,
      height: 20
    },
  };

   constructor(private locationService: LocationService, private router: Router, private ngZone: NgZone) { 
    this.onResize();
  }
  ngOnInit() {
    this.locationService.getCarsLocations().subscribe((res: any) => {
      this.cars = res.placemarks;
      this.lat = res.placemarks[0].coordinates[1]; // initialize the lat
      this.lng = res.placemarks[0].coordinates[0]; // initialize the lng
    });
    window.my = window.my || {},
    window.my.namespace = window.my.namespace || {},
    window.my.namespace.getLatLng = this.getLatLng.bind(this);
  }

  ngAfterViewInit() {
    this.onResize();
  }

  openWindow(id) {
    this.openedWindow = id; 
  }

  isInfoWindowOpen(id) {
    return this.openedWindow == id;     
  }

    
  getLocation(address: string) {    
    let geocoder = new google.maps.Geocoder();
    if (geocoder) {
      geocoder.geocode({
        'address': address
      }, function (results, status) {
        if (status == google.maps.GeocoderStatus.OK) {          
          window.my.namespace.getLatLng(results[0]);
         // console.log(results[0].geometry.location.lat());
         // console.log(results[0].geometry.location.lng());
        }
      });
    }
  }

  goback() {
    this.router.navigate(['/cab-dashboard']);
  }

  submit() {
    this.getLocation(this.address);        
  }

  setLngLat(lat: any, lng: any){
    this.lat = lat;
    this.lng = lng;
    this.ngZone.run(()=>{});     
  }

  getLatLng(e) {         
    this.setLngLat(e.geometry.location.lat(), e.geometry.location.lng()); 
    this.ngZone.run(()=>{});     
  }
}
