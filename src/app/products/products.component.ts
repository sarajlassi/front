import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Location } from '@angular/common';

import { MatDialog } from '@angular/material/dialog';
import { ImagePopupComponent } from '../image-popup/image-popup.component';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: any[] = [];
    searchInput: string = '';
    allproducts: any[] = [];

  constructor(private service: ServiceService,private location: Location, private dialog: MatDialog, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getprod();
    this.allproducts = this.products;

  }

  getprod(): void {
    this.service.get_products().subscribe(
      (data) => {
        this.products = data.map((product: { imageProduct: any }) => {
          const imageUrl = `http://localhost:9090/api/mall-1/Product/images/${product.imageProduct}`;
          const safeImageUrl: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(imageUrl);

          return {
            ...product,
            safeImageProduct: safeImageUrl
          };
        });
        console.log(this.products);
      }
    );
  }
  goBack(): void {
    this.location.back();
  }
  
  searchProducts(): void {
    this.products = this.allproducts.filter(product =>
      product.nameProduct.toLowerCase().includes(this.searchInput.toLowerCase())
    );
  }
  showImageOnClick(imageUrl: string): void {
    this.dialog.open(ImagePopupComponent, {
      data: { imageUrl },
      panelClass: 'custom-dialog-container' 
    });
  }
 
}
