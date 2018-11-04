import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.less']
})
export class ThemeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  
  navigate(path){
    this.router.navigate([path]);
  }

}
