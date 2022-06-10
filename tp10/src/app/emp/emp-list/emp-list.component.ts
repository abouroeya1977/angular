import { Component, OnInit } from '@angular/core';
import { EmpService } from 'src/app/services/emp.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  employees?: any;
  errormessage?: string;
  isAdmin: boolean = false;
  constructor(private empService: EmpService, private tokenStorageService:
    TokenStorageService) { }

  ngOnInit(): void {
    this.empService.getAll().subscribe(
      data => {
        this.employees = data;
        if (this.tokenStorageService.hasRole('ADMIN')) {
          this.isAdmin = true;
        }
      },
      err => {
        this.errormessage = JSON.parse(err.error).message;
      }
    );
  }

}
