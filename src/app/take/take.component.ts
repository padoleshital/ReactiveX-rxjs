import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, map, Subscription, take, takeLast, takeUntil, timer } from 'rxjs';
import { DesignUtilityService } from '../appServices/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {
  constructor(private designUtility:DesignUtilityService){}

  ngOnInit(){
    let obsSubscribe :Subscription;
    let arr = ['shital','Ram','manohar','sita','Gita','holy','demo','demo2']
    let source = interval(2000);
    //Ex -01 Take Operator
     source.pipe(take(5)).subscribe(
    res =>{
      console.log(arr[res])
      let data = arr[res];
      this.designUtility.elAppend(data,'elContainer')    
    })
    
    //Ex-02  takeLast  
    const nameSpace = from(arr);
    nameSpace.pipe(takeLast(4)).subscribe(
      res=>{        
        console.log(nameSpace)
        this.designUtility.elAppend(res,'elContainer1')
      }
    )

    //Ex-03 takeUntil
    let condition1 = timer(5000);
    const clicks = fromEvent(document,'click');

    source.pipe(map(res =>'Number' + res),takeUntil(clicks))
    .subscribe(res =>{            
      console.log(res,"demo")
      this.designUtility.elAppend(res,'elContainer3')
    })
    
  }
 
} 
