import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-custom-observable',
  templateUrl: './custom-observable.component.html',
  styleUrls: ['./custom-observable.component.css']
})
export class CustomObservableComponent implements OnInit {
  constructor(private designUtility:DesignUtilityService) { }
techStatus:any;
name:string ='';
customObs2!:Subscription;
customObs3!:Subscription;
techStatus2:any;
  ngOnInit(): void { 
    //Ex-01 (Manual Observable)
    const customObservable = Observable.create((observer:any)=>{
     setTimeout(()=>{
      observer.next('Angular');
      this.techStatus = 'completed';
     },3000);
      setTimeout(()=>{   
         observer.next('React Js')
        //  this.techStatus = 'error';
        },5000);
        setTimeout(()=>{
          observer.next('ASP .Net');
        },8000);         
        setTimeout(()=>{
          observer.next('HTML & CSS');
          // observer.complete();
          this.techStatus = 'complete';
        },9000);
        // setTimeout(()=>{
        //   observer.error(new Error('JavaScript'));
        // },10000); 
     
    })

    customObservable.subscribe((res:any)=>{
      console.log(res,"customObservable");
      this.designUtility.elAppend(res,'elContainer');
    },
    (err:any)=>{
      this.techStatus = 'error';
    },
    ()=>{
      this.techStatus = 'completed';
    })

    //Ex-02 (Custom interval Observable)
    const arr =['Angular','React Js','ASP .Net','HTML & CSS','c#','Java'];
    const customObservable2 = Observable.create((observer:any)=>{
      let count = 0;
      setInterval(()=>{
        observer.next(arr[count]);       
        count++;
        if(count >=4)
        {
          observer.error('error Emit');
        }
         },3000)
    })

    this.customObs2 = customObservable2.subscribe((res:any) =>{
      console.log(res,"customObservable2");
      this.designUtility.elAppend(res,'elContainer2');
    },
    (err:any)=>{
      this.techStatus2 = 'error';
    },
    ()=>{
      this.techStatus2 = 'complete';
    })

    //Ex-03 (Random interval Observable)
    const arr2 = ['Anup' ,'Shekhar','Sharma','Raj','Kumar','Singh'];
    const customObservable3 = Observable.create((observer:any)=>{
     let count1 = 0;
      setInterval(()=>{
        observer.next(arr2[count1])
        count1++;
        // if(count1 >= 4)
        // {
          
        // }
      },3000)
    })

    this.customObs3 = customObservable3.subscribe((res:any)=>{
      this.name = res;
    })

    
   
     
  }
  ngOnDestroy(){
   this.customObs2.unsubscribe();
  }
 
 
  
}

