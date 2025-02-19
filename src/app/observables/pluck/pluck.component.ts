import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.css']
})
export class PluckComponent implements OnInit {
  userData:any;
  userData2:any;
  user =[
    { name :'Shital', skills:'Angular',
      job:{
        Title: 'Frontend developer'
      }
     },

    { name :'Shilpa', skills:'HTML & CSS',
      job:{
          Title:'web developer',
          exp:'5 yr'
        }
     },

    { name :'Shamli', skills:'python',
      job:{
        Title:'python developer',
         exp:'15 yr'
      }
     },

    { name :'Sharmil', skills:'Java',
      job:{
        Title:'Java developer',
         exp:'3 yr'
      }
     },

    { name :'Sneha', skills:'JavaScript',
      job:{
        Title:'JavaScript developer',
         exp:'6 yr'
      }
     },

  ]

  constructor(){}


  ngOnInit(): void {
   from(this.user)
  .pipe(
    // map(data => data.name),
    pluck('name'),
    toArray()
  )
  .subscribe(res => {
    // this.data = res;
    this.userData = res
    console.log(res)
  })

  from(this.user)
  .pipe(
    pluck('job','Title')
    ,toArray())
  .subscribe(res=>{
    this.userData2 = res
    console.log(this.userData2)
  });
  
    
  }

}
