import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {
public sourceSub!:Subscription;
users=[
  {name:'shital',skill:'Angular'},
  {name:'ram',skill:'Java'},
  {name:'sham',skill:'Python'},
  {name:'veena',skill:'html'},
  {name:'sita',skill:'css'},
  {name:'geeta',skill:'js'},
]
;
  constructor() { }

  ngOnInit(): void {

  const source = interval(1000); 
  source.pipe(take(6),toArray()).subscribe(res=>{  //use take to limit the number of values emitted (Oprator chanaing)
    console.log(res,"res");
  })

  //Ex-2  Convert object to array
  const source2 = from(this.users);
  source2.subscribe(res=>{
    console.log(res);
  })

  //Ex-3  Convert multiple values to array
  const source3 = of('shital','ram','sham');
  source3.pipe(toArray()).subscribe(res =>{
    console.log(res);
  })


  }

}
