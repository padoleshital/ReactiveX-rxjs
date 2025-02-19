import { Component, OnInit } from '@angular/core';
import { filter, from, toArray,map } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  data:any;
  data2:any;
  data3:any;
  dataArr = [
    { id:1, name:'shital', gender:'Female',age:40},
    { id:2, name:'rakesh', gender:'Male',age:30},
    { id:3, name:'sunita', gender:'Male',age:20},
    { id:4, name:'shashank', gender:'Male',age:90},
    { id:5, name:'dhara', gender:'Female',age:18},
    { id:6, name:'akay', gender:'Male',age:14},
    { id:7, name:'jil', gender:'Male',age:15},
    { id:8, name:'shilpa', gender:'Female' ,age:13}
  ];
  Constructor() { }
  ngOnInit(): void {
    const source = from(this.dataArr);  // transform data into array
    console.log(source,"source");
    // filter Oprator
    const example = this.dataArr.filter((person:any) => person.age >= 30).map((res:any) => res.name); //'shital', 'rakesh', 'shashank' convert into sting   
    console.log(example,"demoAge");   
    source.pipe(
      filter( stud => stud.name.length >= 7 ),
      toArray()).subscribe(res =>{
      console.log(res);
      this.data = res;
    })

    //Ex -02 filter by gender

    source.pipe(filter(stud =>stud.gender == 'Female'),toArray()).subscribe(res =>{
      console.log(res,"filter by gender")
      this.data2 = res;
    })

    //Ex-03    
    source.pipe(filter(stud =>stud.id <= 4),toArray()).subscribe(res =>{
      console.log(res,"filter by id")
      this.data3 = res;
    })
      
  }

}
