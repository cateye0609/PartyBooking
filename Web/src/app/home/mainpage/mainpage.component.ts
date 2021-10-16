import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  dishes_Data: Product[] = [];
  // pageOfItems: Array<any>;
  category_list = [
    "First Dishes",
    "Main Dishes",
    "Seafood",
    "Drinks",
    "Dessert"
  ];
  filterred_list = [];
  new_products = [];

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute
  ) { }

  get_DishList() {
    this.activatedRoute.data.subscribe(data => {
      this.dishes_Data = data['products'];
      this.get_newProducts();
      localStorage.setItem('dish_list', JSON.stringify(this.dishes_Data));
    })
  }

  get_newProducts() {
    let temp_product_list = this.dishes_Data;
    for (var i = temp_product_list.length - 1; i > temp_product_list.length - 4; i--) {
      this.new_products.push(temp_product_list[i]);
    }
  }

  addCart_clicked(id: string) {
    this.productService.addCartItem(id, 1);
  }

  product_filter(filter: string): any[] {
    this.filterred_list = [];
    for (var i = 0; i < this.dishes_Data.length; i++) {
      if (this.dishes_Data[i].categories == filter) {
        this.filterred_list.push(this.dishes_Data[i]);
      }
    }
    return this.filterred_list;
  }

  ngOnInit() {
    this.get_DishList();
  }
}
