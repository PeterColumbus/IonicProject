import { Injectable } from "@angular/core";
import { Product } from "./product.model";
@Injectable({
  providedIn: "root",
})
export class ProductsService {
  private viewList = true;
  private products: Product[] = [
    {
      id: 'P001',
      jenis: 'CPU',
      merek: 'AMD',
      foto: 'https://dinopc.imgix.net/catalog/product/cache/f4c70c3375db8d70bb1f98755c13ce7d/a/m/amd-ryzen-5-3600xt-processor_1.jpg',
      model: 'Ryzen 5 3600XT',
      harga: 3887000,
      stok: 1,
      // cpu
      baseClock: 3.8,
      boostClock: 4.5,
      core: 6,
      thread: 12,
      // ram
      speed: null,
      size: null,
      // Motherboard
      chipset: null,
      target: null
    },
    {
      id: 'P002',
      jenis: 'GPU',
      merek: 'XFX',
      foto: 'https://ecs7.tokopedia.net/img/product-1/2020/1/29/83419695/83419695_1c5b619f-a075-4f4f-bcf8-2efc530373b8_1000_1000',
      model: 'Radeon RX 5600 XT',
      harga: 4500000,
      stok: 10,
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
    },
    {
      id: 'P003',
      jenis: 'RAM',
      merek: 'Corsair',
      foto: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/8/20/9561560/9561560_9d310d32-0d61-41fe-b59c-45437e6e37b5_515_515.png',
      model: 'Vengeance LPX PC19200',
      harga: 14000000,
      stok: 5,
      // cpu
      baseClock: null,
      boostClock: null,
      core: null,
      thread: null,
      // ram
      speed: 2400,
      size: 8,
      // Motherboard
      chipset: null,
      target: null
    },
    {
      id: 'P004',
      jenis: 'Motherboard',
      merek: 'ASRock',
      foto: 'https://ecs7.tokopedia.net/img/product-1/2019/12/18/batch-upload/batch-upload_f45ab31f-74b8-4410-a9f8-387c0f967727',
      model: 'TRX40 Taichi',
      harga: 8749000,
      stok: 7,
      // cpu
      baseClock: null,
      boostClock: null,
      core: null,
      thread: null,
      // ram
      speed: null,
      size: null,
      // Motherboard
      chipset: 'AMD TRX40',
      target: 'AMD'
    },
    {
      id: 'P005',
      jenis: 'GPU',
      merek: 'ASUS',
      foto: 'https://ecs7.tokopedia.net/img/product-1/2019/9/16/9651507/9651507_2656d777-cefb-4fad-a1f1-e6cfd0aee711_500_500',
      model: 'GeForce RTX 2080 SUPER',
      harga: 16800000,
      stok: 0,
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
    }
  ];
  constructor() {}
  getAllProduct() {
    return [...this.products];
  }

  getProduct(productId: string) {
    return {
      ...this.products.find((product) => {
        return product.id === productId;
      }),
    };
  }
  getView() {
    return this.viewList;
  }
  setView(newViewList: boolean) {
    this.viewList = newViewList;
    return this.viewList;
  }

  addProduct(newProduct: Product) {
    this.products.push(newProduct);
  }
  deleteProduct(productId: string) {
    this.products = this.products.filter((product) => {
      return product.id !== productId;
    });
  }

  editProduct(editedProduct: Product) {
    this.products = this.products.map((item) => {
      if (item.id === editedProduct.id) {
        return editedProduct;
      } else {
        return item;
      }
    });
  }


}
