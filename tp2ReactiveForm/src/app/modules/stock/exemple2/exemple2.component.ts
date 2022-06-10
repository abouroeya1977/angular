import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Article } from '../article';

@Component({
  selector: 'app-exemple2',
  templateUrl: './exemple2.component.html',
  styleUrls: ['./exemple2.component.css']
})
export class Exemple2Component implements OnInit {

  article!: Article;
  form = this.fb.group({
    id: ['', [Validators.required, Validators.minLength(2)]],
    description: ['', [Validators.required]],
    prix: ['', [Validators.required, Validators.min(0), Validators.max(10000)]],
    quantite: ['', [Validators.required, Validators.minLength(1)]],
  })

  get articles() {
    return this.form.controls;
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  save() {
    let json=JSON.stringify(this.form.value);
    this.article=JSON.parse(json);
  }


}
