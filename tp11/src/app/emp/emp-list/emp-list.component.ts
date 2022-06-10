import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
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

  loading: boolean = true;
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private empService: EmpService, private tokenStorageService:
    TokenStorageService) { }

  ngOnInit(): void {
    this.getData('0', '5')
  }

  getData(page: string, size: string) {
    this.empService.getIntervals(page, size)
      .subscribe((response: any) => {
        if (this.tokenStorageService.hasRole('ADMIN')) {
          this.isAdmin = true;
        }
        this.loading = false;
        this.employees = response.employees;
        this.employees.length = response.size;
        this.dataSource = new MatTableDataSource<any>(this.employees);
        this.dataSource.paginator = this.paginator;
      },
        err => {
          this.errormessage = JSON.parse(err.error).message;
        }
      )
  }
  pageChanged(event: PageEvent) {
    this.loading = true;
    let pageIndex = event.pageIndex;
    let pageSize = event.pageSize;
    let previousIndex = event.previousPageIndex;
    let previousSize = pageSize * pageIndex;
    this.getNextData(previousSize, (pageIndex).toString(), pageSize.toString());
  }
  getNextData(currentSize: number, page: string, size: string) {
    this.empService.getIntervals(page, size).subscribe((response: any) => {
      this.loading = false;
      this.employees.length = currentSize;
      this.employees.push(...response.employees);
      this.employees.length = response.size;
      this.dataSource = new MatTableDataSource<any>(this.employees);
      this.dataSource._updateChangeSubscription();
      this.dataSource.paginator = this.paginator;
    })
  }

}
