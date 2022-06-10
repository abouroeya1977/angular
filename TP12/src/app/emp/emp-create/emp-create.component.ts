import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Emp } from 'src/app/model/emp';
import { EmpService } from 'src/app/services/emp.service';

@Component({
  selector: 'app-emp-create',
  templateUrl: './emp-create.component.html',
  styleUrls: ['./emp-create.component.css']
})
export class EmpCreateComponent implements OnInit {

  employee = new Emp(0, '', 0, '');
  submitted = false;
  message: string = '';

  isSaved: boolean = false;

  constructor(private empService: EmpService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void { }

  createEmployee(): void {
    this.empService.create(this.employee)
      .subscribe(
        response => {
          this.submitted = true;
          this.router.navigate([{ outlets: { primary: 'navbar', contenu: 'employees' } }]);
        },
        error => {
          this.message = error.message;
          console.log(error);
        });
  }
  save(): void {
    this.isSaved = true;
  }

}
