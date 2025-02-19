import { Component,OnInit } from '@angular/core';
import { interval, tap, Subscription, map } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit{
  public myColor: string=''; 
  constructor(private designUtility : DesignUtilityService){}

  ngOnInit(): void {
    //Ex -01
    let obsubscribe : Subscription;
 
    const arr =['Anup','pramila','sharma','Uxtrends','John','Alex'];
    let source = interval(2000);

    
    obsubscribe = source.pipe(
      tap(res=>{
        console.log( res ,' before tap')
        if(res ==4)
        {
          obsubscribe.unsubscribe();
        }
      }),
      map(res => arr[res]      
    )).subscribe(res =>{
      console.log( res,"demo")
      this.designUtility.elAppend(res,'elContainer')
    })

    //Ex-02
  
    const colorArr = ['red','green','blue', 'yellow','pink','orange'];
    let ob1subscribe : Subscription;
    ob1subscribe = source.pipe(tap(res =>{
      this.myColor = colorArr[res]
      if(res == 6)
      {
        ob1subscribe.unsubscribe();
      }
      console.log(res,"before map",res);
    }),      
      map(res => colorArr[res]
    )).subscribe(res =>{
      console.log(res,"colorArr");
      this.designUtility.elAppend(res,'elConatiner2')
    })
  
      
  }
  


} 