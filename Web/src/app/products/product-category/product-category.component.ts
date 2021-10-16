import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_models/product.model';
import { ProductService } from 'src/app/_services/product.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  @Input('data') filtered_products: Product[] = [];
  page: number = 1;
  total_pages: number;

  cat_filter: string;

  constructor(
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
  ) { }

  // Thêm vào giỏ hàng
  addCart(id: string) {
    this.productService.addCartItem(id, 1);
  }

  get_page(page: number) {
    this.get_dishes_byCate(this.cat_filter, page);
  }

  // Lấy danh sách món ăn theo category
  get_dishes_byCate(category: string, page: number) {
    this.productService.get_dish_by_category(category, page).subscribe(
      res => {
        this.filtered_products = res.data.value as Product[];
        this.total_pages = res.data.total_page;
        this.page = page;
      })
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.cat_filter = params['filter'];
      // this.get_dishes_byCate(this.cat_filter, 1);
    });
    this.activatedRoute.data.subscribe(data => {
      this.filtered_products = data['productCategory'].value as Product[];
      this.total_pages = data['productCategory'].total_page;
      this.page = 1;
    });
  }
}
