import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

interface Covid {  
  state: any;  
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public covid: any = [];
  public state: any = [];

  constructor(
    private api : ApiService
  ) { 
  }

  ngOnInit(): void {
    this.getCovidData();
  }

  getCovidData(){
    this.api.getCovidData().subscribe(coviddata =>{
      this.covid = coviddata
    })
  }

  mySortingFunction(a: any, b:any){
    return a.key > b.key ? -1 : 1;
  }

  // selecting data from State
  selectData(data : any){
    this.state  = data['value']['districtData'];
  }

  //data values of state district
  dataShowActive(data: any){
    return data['active'];
  }
  dataShowConfirmed(data: any){
    return data['confirmed'];
  }
  dataShowDeceased(data: any){
    return data['deceased'];
  }
  dataShowMigratedother(data: any){
    return data['migratedother'];
  }
  dataShowNote(data: any){
    return data['notes'];
  }
  dataShowRecovered(data: any){
    return data['recovered'];
  }
}
