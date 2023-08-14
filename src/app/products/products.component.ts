import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { MatDialog } from '@angular/material/dialog';
import { ImagePopupComponent } from '../image-popup/image-popup.component';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Location } from '@angular/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any[] = [];
  allProducts: any[] = [];
  searchInput: string = '';

  constructor(private service: ServiceService, private dialog: MatDialog, private sanitizer: DomSanitizer,private location: Location, ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.service.get_products().subscribe((data) => {
      this.products = data.map((product: any) => {
        const productImageUrl = `http://localhost:9090/api/mall-1/Product/images/${product.imageProduct}`;
        const shopLocalizationImageUrl = `http://localhost:9090/api/mall-1/Shop/images/${product.shop.localisationShop}`;
        
        const safeProductImageUrl: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(productImageUrl);
        const safeShopLocalizationImageUrl: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(shopLocalizationImageUrl);
        
        return {
          ...product,
          safeImageProduct: safeProductImageUrl,
          safeLocalizationImage: safeShopLocalizationImageUrl
        };
      });
      this.products.reverse();
      this.allProducts = this.products; // Store a copy of all products
    });
  }

  searchProducts(): void {
    this.products = this.allProducts.filter(product =>
      product.nameProduct.toLowerCase().includes(this.searchInput.toLowerCase())
    );
  }

  resetSearch(): void {
    this.searchInput = '';
    this.products = this.allProducts; 
  }
  goBack(): void {
    this.location.back();
  }
  showLocalizationImageOnClick(imageUrl: SafeUrl): void {
    console.log('Clicked shop localization image URL:', imageUrl);
    this.dialog.open(ImagePopupComponent, {
      data: { imageUrl },
      panelClass: 'custom-dialog-container' 
    });
  }
  
}