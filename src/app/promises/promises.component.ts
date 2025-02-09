import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {
  constructor() { }

  DellAvailable() {
    return setTimeout(() => {
    return true
    },3000)
  }

  HpAvailable()
  {  
    return setTimeout(() => {
    return false;
  },3000);
  }

  ngOnInit() {

    //Basic example of Promise
    
    let buyLaptop = new Promise((resolve, reject) => {     
         // resolve('Promise is resolved');
          if(this.DellAvailable()){
            resolve('Dell Laptop is available');
          }
          else if(this.HpAvailable()){
            reject('Hp Laptop is available');          
          }
          else{
            reject('Laptop is not available')
          }
        
    })
    buyLaptop.then(res =>{
      console.log('then code =>', res);
    })
    buyLaptop.catch(res =>{
      console.log('then code =>', res);
    }) 

  }

  myFunction(){
    console.log("Hello, I am from myFunction");
  }
   
 
} 