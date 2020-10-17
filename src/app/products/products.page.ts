import { Component, OnInit } from "@angular/core";
import { ProductsService } from "./products.service";
import { Product } from "./product.model";
@Component({
  selector: "app-products",
  templateUrl: "./products.page.html",
  styleUrls: ["./products.page.scss"],
})
export class ProductsPage implements OnInit {
  products: Product[];
  viewList: boolean;
  constructor(private productService: ProductsService) {}

  ngOnInit() {}
  ionViewWillEnter() {
    this.products = this.productService.getAllProduct();
    this.viewList = this.productService.getView();
  }
  changeView() {
    if (this.viewList === true) {
      this.viewList = this.productService.setView(false);
    } else {
      this.viewList = this.productService.setView(true);
    }
  }
}
