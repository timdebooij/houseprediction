import { Component, Input } from '@angular/core';
import {Router, RouterModule} from '@angular/router'
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';



@Component({
    selector: 'homescreen',
    templateUrl: './homescreen.component.html',
    styleUrls: ['./homescreen.component.css']
  })
  export class HomescreenComponent {

    toPredictionPage(){
      console.log("to prediction page")
    }

    executeModel(){

    }

    predict(){

    }
  }