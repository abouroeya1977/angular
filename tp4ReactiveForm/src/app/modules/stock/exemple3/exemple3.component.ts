import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article } from '../article';

@Component({
  selector: 'app-exemple3',
  templateUrl: './exemple3.component.html',
  styleUrls: ['./exemple3.component.css']
})
export class Exemple3Component implements OnInit {

  article!: Article;
  form = this.fb.group({
    id: ['', [Validators.required, Validators.minLength(2)]],
    description: ['', [Validators.required]],
    prix: ['', [Validators.required, Validators.min(0), Validators.max(10000)]],
    quantite: ['', [Validators.required, Validators.minLength(1)]],
    proprietes : this.fb.group({
      detail: ['', [Validators.required, Validators.minLength(2)]],
      performance: ['', [Validators.required]]
      })})

  get articles() {
    return this.form.controls;
  }

  get proprietes() {
    return (this.form.get('proprietes') as FormGroup).controls;
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  save() {
    let json=JSON.stringify(this.form.value);
    this.article=JSON.parse(json);
  }



}
