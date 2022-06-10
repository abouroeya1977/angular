import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product2',
  templateUrl: './product2.component.html',
  styleUrls: ['./product2.component.css']
})
export class Product2Component implements OnInit {

  public products?:Product[];
   
  constructor(private route: ActivatedRoute,private productService:ProductService){
  }

  ngOnInit() {
     this.products=this.route.snapshot.data['products'];
  }
 
}