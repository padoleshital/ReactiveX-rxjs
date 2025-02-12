import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-offrom',
  templateUrl: './offrom.component.html',
  styleUrls: ['./offrom.component.css']
})
export class OffromComponent implements OnInit{
  public ObsMesg:any ={};
  public ArrayMesg:[] =[]
  constructor(private designUtitliy:DesignUtilityService) { }
  ngOnInit() :void {

  //OF Operator
  //The of operator is used to convert the arguments to an observable sequence.

  const Obs1 = of('Shital', 'Manohar','Padole');

  const Obs2 = of({a:'Shital' , b:'Manohar', c:'Padole'});

  Obs1.subscribe((res:any) =>{
    console.log(res,"res");
    this.designUtitliy.elAppend(res,'elContainer');
  });

  Obs2.subscribe((res:any)=>{
    this.designUtitliy.elAppend(res,'elContainer2');
    console.log(res,"res");
    this.ObsMesg = res;
  })

//From Operator
let Array = ['Hello','HTML','CSS','JavaScript','Angular']

let Obs3= from(Array);
Obs3.subscribe((res:any)=>{
  this.designUtitliy.elAppend(res,'elConatiner4');
  console.log(res,"res");  
})

//From Promise to Observable
let promise = new Promise(resolve =>{
  return setTimeout(() =>{
    resolve('Promise Resolved')
  },2000)
})

let Obs4 = from(promise);
Obs4.subscribe((res:any)=>{
  this.designUtitliy.elAppend(res,'elContainer5');
  console.log(res,"res");
})

//From String to Observable
let string = 'Welcome to RXjs';

let Obs5 = from(string);
Obs5.subscribe((res:any)=>{
  this.designUtitliy.elAppend(res,'elContainer6');
  console.log(res,"elContainer6")
})

}
    
  
}
  
