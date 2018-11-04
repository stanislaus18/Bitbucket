import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cab-dashboard',
  templateUrl: './cab-dashboard.component.html',
  styleUrls: ['./cab-dashboard.component.less']
})
export class CabDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(path){
    this.router.navigate([path]);
  }

}
