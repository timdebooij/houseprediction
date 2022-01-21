import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router, RouterModule} from '@angular/router'
import { RandomForestClassifier } from 'kalimdor/ensemble'; // model to train
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
    selector: 'app-root',
    templateUrl: './predictiontwo.component.html',
    styleUrls: ['./predictiontwo.component.css']
  })
  export class PredictionComponentTwo {
    quality;
    aboveLivArea;
    garageSpace;
    garageArea;
    basementArea: number = 0;
    firstFloorArea: number = 1;
    buildingYear: number = 1990;
    bathrooms: number = 1;
    bid: number = 0;
    constructor(private _Activatedroute:ActivatedRoute){
      this.quality = this._Activatedroute.snapshot.paramMap.get("quality");
      this.aboveLivArea = this._Activatedroute.snapshot.paramMap.get("livar");
      this.garageSpace = this._Activatedroute.snapshot.paramMap.get("garsp");
      this.garageArea = this._Activatedroute.snapshot.paramMap.get("garar");
    }

    validateBid(): boolean{
      if(this.bid < 1){
        return true;
      }
      else{
        return false;
      }
    }

    validateBaseArea(): boolean{
      if(this.basementArea < 0 || this.basementArea %1!=0){
        return true;
      }
      else{
        return false;
      }
    }

    validateFirstFloor(): boolean{
      if(this.firstFloorArea < 1 || this.firstFloorArea %1!=0){
        return true;
      }
      else{
        return false;
      }
    }

    validateBuildingYear(): boolean{
      if(this.buildingYear > 2022 || this.buildingYear < 1600 ||this.buildingYear %1!=0){
        return true;
      }
      else{
        return false;
      }
    }

    validateBathrooms(): boolean{
      if(this.bathrooms < 1 || this.bathrooms %1!=0){
        return true;
      }
      else{
        return false;
      }
    }

    validateAll(): boolean{
      if(this.validateBaseArea() || this.validateBathrooms() || this.validateBuildingYear() || this.validateFirstFloor() || this.validateBid()){
        return false;
      }
      else{
        return true;
      }
    }


    print(){
      console.log(this.quality)
    }
}