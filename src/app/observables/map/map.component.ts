import { Component, OnInit } from '@angular/core';
import { from, interval, map, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit{
 //subscribe
  sub1 : Subscription | undefined;
  sub2 : Subscription | undefined;
  sub3 : Subscription | undefined;
  //message
  msg1:any;
  msg2:any;
  msg3:any;
  constructor(private designUtility:DesignUtilityService){}

  ngOnInit() {
    const broadCastVideo = interval(1000)
    //Ex - 01
    this.sub1 = broadCastVideo.pipe(
      map(data =>
        'Video ' + data
        // console.log('Video'+' ' + data)
    )).subscribe(res =>{
      this.msg1 = res
      })
    
    setTimeout(() =>{
      this.sub1?.unsubscribe();
    },10000);



    //Ex - 02
  this.sub2 = broadCastVideo.pipe(
    map(data => (data * 10))  
  ).subscribe(res =>{
    this.msg2 = res
  });

  setTimeout(() =>{
    this.sub2?.unsubscribe();
  },10000)


  //Ex - 03
  const members = from([
    { id:1,age:30, name:'shital'},
    { id:2,age:30, name:'sham'},
    { id:3,age:30, name:'mohan'},
    { id:4,age:30, name:'govind'},
    { id:5,age:30, name:'basuri'},
    { id:6,age:30, name:'kashi'},
    { id:7,age:30, name:'shiv'},
    { id:8,age:30, name:'shakti'},
  ])

  members.pipe(
    map(data => data.name)
  ).subscribe(res =>{
    this.msg3 = res
    this.designUtility.elAppend(res,'elContainer');
  })

  
  
  }

  











//Ex - 03


}
