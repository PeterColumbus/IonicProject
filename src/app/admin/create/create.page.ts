import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Product } from "../../products/product.model";
import { ProductsService } from "../../products/products.service";
@Component({
  selector: "app-create",
  templateUrl: "./create.page.html",
  styleUrls: ["./create.page.scss"],
})
export class CreatePage implements OnInit {
  allProduct: Product[];
  foto: string;
  newProduct: Product;
  constructor(
    private router: Router,
    private productService: ProductsService
  ) {}
  ngOnInit() {}
  ionViewWillEnter() {
    this.allProduct = this.productService.getAllProduct();
  }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    const id =
      parseInt(this.allProduct[this.allProduct.length - 1].id.substring(1)) + 1;
    const jenis = form.value.jenis;
    const merek = form.value.merek;
    if (form.value.foto.replace(/\s/g, '') === '') {
      this.foto = 'https://thumbs.dreamstime.com/b/no-image-available-icon-flat-vector-no-image-available-icon-flat-vector-illustration-132482953.jpg';
    } else {
      this.foto = form.value.foto;
    }
    const model = form.value.model;
    const harga = form.value.harga;
    const stok = form.value.stok;

    if (jenis === 'CPU') {
      const baseClock = form.value.baseClock;
      const boostClock = form.value.boostClock;
      const core = form.value.core;
      const thread = form.value.thread;
      this.newProduct = {
        id: `P${id}`,
        jenis: jenis,
        merek: merek,
        foto: this.foto,
        model: model,
        harga: harga,
        stok: stok,
        // cpu
        baseClock: baseClock,
        boostClock: boostClock,
        core: core,
        thread: thread,
        // ram
        speed: null,
        size: null,
        // Motherboard
        chipset: null,
        target: null
      };
    } else if (jenis === 'RAM') {
      const speed = form.value.speed;
      const size = form.value.size;
      this.newProduct = {
        id: `P${id}`,
        jenis: jenis,
        merek: merek,
        foto: this.foto,
        model: model,
        harga: harga,
        stok: stok,
        // cpu
        baseClock: null,
        boostClock: null,
        core: null,
        thread: null,
        // ram
        speed: speed,
        size: size,
        // Motherboard
        chipset: null,
        target: null
      };
    } else if (jenis === "Motherboard") {
      const chipset = form.value.chipset;
      const target = form.value.target;
      this.newProduct = {
        id: `P${id}`,
        jenis: jenis,
        merek: merek,
        foto: this.foto,
        model: model,
        harga: harga,
        stok: stok,
        // cpu
        baseClock: null,
        boostClock: null,
        core: null,
        thread: null,
        // ram
        speed: null,
        size: null,
        // Motherboard
        chipset: chipset,
        target: target
      };
    } else if (jenis === "GPU") {
      this.newProduct = {
        id: `P${id}`,
        jenis: jenis,
        merek: merek,
        foto: this.foto,
        model: model,
        harga: harga,
        stok: stok,
        // cpu
        baseClock: null,
        boostClock: null,
        core: null,
        thread: null,
        // ram
        speed: null,
        size: null,
        // Motherboard
        chipset: null,
        target: null
      };
    }

    this.productService.addProduct(this.newProduct);
    this.router.navigate(["/admin"]);
  }
}
