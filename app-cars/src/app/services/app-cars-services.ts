import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare let window: any;

@Injectable()
export class LocationService {
    constructor(private http: HttpClient) { 
        
    }

    // can replace the url with http://data.m-tribes.com/locations.json ( if CORS allowed)
    getCarsLocations () {                
        return this.http.get('./../assets/data.json');
    }

}