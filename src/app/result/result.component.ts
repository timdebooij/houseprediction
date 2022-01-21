import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router, RouterModule} from '@angular/router'
import { RandomForestClassifier } from 'kalimdor/ensemble'; // model to train
import { MatCardModule } from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './result.component.html',
    styleUrls: ['./result.component.css']
  })
@Injectable()
  export class ResultComponent {
    quality;
    aboveLivArea: number;
    garageSpace;
    garageArea: number;
    basementArea: number;
    firstFloorArea: number;
    buildingYear;
    bathrooms;
    bid;
    result = [0];
    prediction: number = 0;
    path = "";
    classifier: RandomForestClassifier = new RandomForestClassifier({
      nEstimator: 1,
      });
    constructor(private _Activatedroute:ActivatedRoute, private http: HttpClient){
      this.quality = this._Activatedroute.snapshot.paramMap.get("quality");
      this.aboveLivArea = +this._Activatedroute.snapshot.paramMap.get("livar")!;
      this.garageSpace = this._Activatedroute.snapshot.paramMap.get("garsp");
      this.garageArea = +this._Activatedroute.snapshot.paramMap.get("garar")!;
      this.basementArea = +this._Activatedroute.snapshot.paramMap.get("base")!;
      this.firstFloorArea = +this._Activatedroute.snapshot.paramMap.get("firstfl")!;
      this.buildingYear = this._Activatedroute.snapshot.paramMap.get("build");
      this.bathrooms = this._Activatedroute.snapshot.paramMap.get("bath");
      this.bid = this._Activatedroute.snapshot.paramMap.get("bid");
      this.predict()
    }

    predict(){
      this.showConfig()
      console.log(this.config?.prediction);
    }

    

    config: Config = new Config();
    num: string = "";

    getConfig() {
      // now returns an Observable of Config
      this.path = "https://api-hcaid.herokuapp.com/predictions/" + this.quality + "/" + this.aboveLivArea * 10.764262648009 + "/" + this.garageSpace + "/" + this.garageArea * 10.764262648009 +
      "/" + this.basementArea * 10.764262648009 + "/" + this.firstFloorArea * 10.764262648009 + "/" + this.buildingYear + "/" + this.bathrooms;
      return this.http.get<Config>(this.path);
    }

showConfig() {
  this.getConfig()
    // clone the data object, using its known Config shape
    .subscribe((data: Config) => this.config = {...data});
}

    predicted(): boolean{
      if(this.config.prediction == 0 || this.config == undefined){
        return false;
      }
      else{
        this.config.accuracy = Math.round(this.config.accuracy);
        this.config.prediction = Math.round(this.config.prediction);
        return true;
      }
    }

    compare(): boolean{
      if(+this.bid! < this.config.prediction){
        return true;
      }
      else{
        return false;
      }
    }

  }

export class Config {
  accuracy: number = 0;
  prediction: number = 0;
}