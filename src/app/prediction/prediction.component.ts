import { Component, Input } from '@angular/core';
import {Router, RouterModule} from '@angular/router'
import { RandomForestClassifier } from 'kalimdor/ensemble'; // model to train
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
    selector: 'app-root',
    templateUrl: './prediction.component.html',
    styleUrls: ['./prediction.component.css']
  })
  export class PredictionComponent {
    quality: number = 1;
    aboveArea: number = 1;
    garageSpace: number = 0;
    garageArea = 0;
    cls: RandomForestClassifier = new RandomForestClassifier({
    nEstimator: 100,
    });

    result: number[] = [0]
    
    validateQuality(): boolean{
      if(this.quality < 1 || this.quality > 10 || this.quality % 1 != 0){
        return true;
      }
      else{
        return false;
      }
    }

    validateAboveGroundLiving(): boolean{
      if(this.aboveArea < 1 || this.aboveArea % 1!= 0){
        return true;
      }
      else{
        return false;
      }
    }

    validateGarageSpace(): boolean{
      if(this.garageSpace < 0 || this.garageSpace %1!=0){
        return true;
      }
      else{
        return false;
      }
    }

    validateGarageArea(): boolean{
      if(this.garageArea < 0 || this.garageArea %1!=0){
        return true;
      }
      else{
        return false;
      }
    }

    allValid(): boolean{
      if(this.validateAboveGroundLiving() || this.validateGarageArea() || this.validateGarageSpace() || this.validateQuality()){
        return false;
      }
      else{
        return true;
      }
    }

    

    

  }