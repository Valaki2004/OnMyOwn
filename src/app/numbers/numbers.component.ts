import { Component } from '@angular/core';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrl: './numbers.component.css'
})
export class NumbersComponent {
  MyNumbers:any = []
  constructor(
    private base:BaseService
  ){
    this.base.getMyNumbers().subscribe(
      (res)=>this.MyNumbers=res
    )
  }

}
