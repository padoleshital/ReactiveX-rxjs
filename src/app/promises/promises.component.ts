import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css']
})
export class PromisesComponent implements OnInit {
  promiseValue: any;
  dell ={
    brand: 'Dell',
    hardDisk: '1TB',
    color: 'Black'
  }
  hp ={
    brand: 'Hp',
    hardDisk: '2TB',
    color: 'Silver'
  }
  notAvailable = {
    Product: 'Laptop Not Available',
  };
  constructor() { }


  DellAvailable() {   
    return true
    }

  HpAvailable()
  {     
    return false; 
  }

  ngOnInit() {

    //Basic example of Promise
    
    let buyLaptop = new Promise((resolve, reject) => {     
         // resolve('Promise is resolved');
          if(this.DellAvailable()){
            return setTimeout(() => {
            resolve(this.dell.color);
          },3000);
          }
          else if(this.HpAvailable()){
            return setTimeout(() => {
            reject(this.hp); 
          },3000);         
          }
          else{
            return setTimeout(() => {
            reject(this.notAvailable);
          },3000); 
          }
        
    })
    buyLaptop.then(res =>{
      this.promiseValue = res;
      console.log('then code =>', res);
    })
    buyLaptop.catch(res =>{
      this.promiseValue = res;
      console.log('then code =>', res);
    }) 

  }

  myFunction(){
    console.log("Hello, I am from myFunction");
  }
   
 
} 