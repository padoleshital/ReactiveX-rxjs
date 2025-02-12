import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {
  obsMesg:any;
  videoSubscription:Subscription = new Subscription();
   constructor(private designUtility:DesignUtilityService) { }
    ngOnInit() {
       let broadCastVideos = interval(1000); //interval is a function that emits a sequence of numbers in a specified interval of time.

      // let broadCastVideos = timer(1000,6000);

      broadCastVideos.subscribe(res =>{
        console.log(res);
        this.obsMesg = 'Video ' + res;
        this.designUtility.elAppend(this.obsMesg,'elContainer');
        this.designUtility.elAppend(this.obsMesg,'elContainer1');
        this.designUtility.elAppend(this.obsMesg,'elContainer2');
        if(res>=5){
          this.videoSubscription.unsubscribe();
        }

      })

      //timer operator is used to emit values in a sequence after a specified time interval.
      // this.broadCastVideos1().subscribe(res =>{
      //   console.log(res);
      //   this.obsMesg = 'Video' + res;
      //   this.designUtility.elAppend(this.obsMesg,'elContainer3');
      // })

    }


}