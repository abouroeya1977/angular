import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-exemple1',
  templateUrl: './exemple1.component.html',
  styleUrls: ['./exemple1.component.css']
})
export class Exemple1Component implements OnInit {

  adresse = new FormControl('', [Validators.required]);
  comment = this.fb.control('', [Validators.required]);

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  update() {
    this.adresse.setValue('TEST123');
   
  }

  updateControles() {
    this.adresse.setValidators([Validators.required,Validators.maxLength(10)])
    this.adresse.updateValueAndValidity();

  }
}
