import { Component, OnInit } from "@angular/core";
import { ProductsService } from "../products/products.service";
import { Product } from "../products/product.model";
import { Router } from "@angular/router";
import { ToastController, AlertController } from "@ionic/angular";
@Component({
  selector: "app-admin",
  templateUrl: "./admin.page.html",
  styleUrls: ["./admin.page.scss"],
})
export class AdminPage implements OnInit {
  products: Product[];

  constructor(
    private productService: ProductsService,
    private router: Router,
    private toastController: ToastController,
    private alertController: AlertController
  ) {}

  ngOnInit() {}
  ionViewWillEnter() {
    this.products = this.productService.getAllProduct();
  }
  openEditForm(productId: string) {
    this.router.navigate(["admin/" + productId]);
  }

  deleteItem(productId: string) {
    this.productService.deleteProduct(productId);
    this.products = this.productService.getAllProduct();
    this.deleteToast();
  }
  async parseDelete(productId: string) {
    const alert = await this.alertController.create({
      header: "Pemberitahuan",
      message: "Apakah kamu yakin ingin menghapusnya?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
        },
        {
          text: "Ya",
          handler: () => this.deleteItem(productId),
        },
      ],
    });
    await alert.present();
  }
  async deleteToast() {
    const toast = await this.toastController.create({
      message: "Product berhasil dihapus.",
      duration: 1000,
    });
    toast.present();
  }
}
