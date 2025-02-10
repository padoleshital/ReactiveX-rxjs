import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.css']
})
export class FromEventComponent implements  AfterViewInit {
  @ViewChild('addBtn') addBtn!: ElementRef;


  constructor(private utilityService: DesignUtilityService){} //called from global service
      
      
  ngAfterViewInit(){     
    let count = 0; 
   
    fromEvent(this.addBtn.nativeElement, 'click').subscribe(res =>{    
      let countValue = 'Video  ' + count++; 
      // console.log('Video  ' + count++ );
      this.utilityService.elAppend(countValue,'elContainer1');
      this.utilityService.elAppend(countValue,'elContainer2');
    })
  }
  elAppend(val:any,containerId:any )
  {
    let el = document.createElement('li')
    el.innerText = val;
    document.getElementById(containerId)?.appendChild(el);
  }
      

}
