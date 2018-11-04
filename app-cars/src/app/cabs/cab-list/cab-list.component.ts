import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/app-cars-services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cab-list',
  templateUrl: './cab-list.component.html',
  styleUrls: ['./cab-list.component.less']
})
export class CabListComponent implements OnInit {
  cabs: any;
  searchText: string;

  constructor(private locationService: LocationService,
    private router: Router) { }

  ngOnInit() {
    this.locationService.getCarsLocations().subscribe((res: any) => {
      this.cabs = res.placemarks;
    });
  }

  goback() {
    this.router.navigate(['/cab-dashboard']);
  }

  directions(cab: any) {
    sessionStorage.setItem('cab',JSON.stringify(cab));
    this.router.navigate(['/cab-directions']);
  }
}
