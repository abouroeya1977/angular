import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '[employee-detail]',
  templateUrl: './emp-detail.component.html',
  styleUrls: ['./emp-detail.component.css']
})
export class EmpDetailComponent implements OnInit {
  @Input()
  employee:any;

  constructor() { }

  ngOnInit(): void {
  }

}
