import { Component, Input } from '@angular/core';
import {Router, RouterModule} from '@angular/router'
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
    selector: 'homescreen',
    templateUrl: './homescreen.component.html',
    styleUrls: ['./homescreen.component.css']
  })
  @Injectable()
  export class HomescreenComponent {
    config: Config = new Config();
    path = "";

    constructor(private http: HttpClient){
      this.showConfig()
    }

    getConfig() {
      // now returns an Observable of Config
      this.path = "https://api-hcaid.herokuapp.com/predictions/1/1/1/1/1/1/1/1/";
      return this.http.get<Config>(this.path);
    }

    showConfig() {
      this.getConfig()
        // clone the data object, using its known Config shape
        .subscribe((data: Config) => this.config = {...data});
    }

    toPredictionPage(){
      console.log("to prediction page")
    }

    executeModel(){

    }

    predict(){

    }
  }

  export class Config {
    accuracy: number = 0;
    prediction: number = 0;
  }