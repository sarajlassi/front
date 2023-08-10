import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ImagePopupComponent } from '../image-popup/image-popup.component';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-shops-by-cat',
  templateUrl: './shops-by-cat.component.html',
  styleUrls: ['./shops-by-cat.component.css']
})
export class ShopsByCatComponent {
  shops: any[] = [];
  searchInput: string = '';
  allShops: any[] = [];
  selectedShop: any;
  showImage: boolean = false; 

  constructor(private service: ServiceService, private route: ActivatedRoute, private location: Location, private dialog: MatDialog,private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const categoryId = Number(params.get('categoryId'));
      this.getShopsByCategory(categoryId);
    });
  }

  getShopsByCategory(categoryId: number): void {
    this.service.chercher_Shops(categoryId).subscribe((data) => {
      this.shops = data.map((shop: { imageShop: any, localisationShop: any }) => {
        const imageUrl = `http://localhost:9090/api/mall-1/Shop/images/${shop.imageShop}`;
        const localisationImageUrl = `http://localhost:9090/api/mall-1/Shop/images/${shop.localisationShop}`;
        const safeLocalisationImageUrl: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(localisationImageUrl);
        const safeImageUrl: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(imageUrl);
        this.shops = data;
        this.allShops = data;
        return {
          ...shop,
          safeImageShop: safeImageUrl,
          safeLocalisationImage: safeLocalisationImageUrl

        };
      });
      console.log(this.shops);
    
    }
    )
  }

  
  goBack(): void {
    this.location.back();
  }

  searchProducts(): void {
    this.shops = this.allShops.filter(shops =>
      shops.nameShop.toLowerCase().includes(this.searchInput.toLowerCase())
    );
  }
  showImageOnClick(imageUrl: string): void {
    this.dialog.open(ImagePopupComponent, {
      data: { imageUrl },
      panelClass: 'custom-dialog-container' 
    });
  }
 
}
