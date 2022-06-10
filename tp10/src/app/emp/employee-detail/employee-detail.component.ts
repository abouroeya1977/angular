import { Component, Input, OnInit } from '@angular/core';
import { Emp } from 'src/app/model/emp';

@Component({
  selector: '[employee-detail]',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  @Input()
  employee:Emp=new Emp(0,'',0,'')

  constructor() { }

  ngOnInit(): void {
  }

}
