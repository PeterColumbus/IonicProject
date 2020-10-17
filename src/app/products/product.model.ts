export interface Product {
  id: string;
  jenis: string;
  merek: string;
  foto: string;
  model: string;
  harga: number;
  stok: number;
  // cpu
  baseClock: number;
  boostClock: number;
  core: number;
  thread: number;
  // ram
  speed: number;
  size: number;
  // Motherboard
  chipset: string;
  target: string;
}
