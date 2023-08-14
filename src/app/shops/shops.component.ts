import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ImagePopupComponent } from '../image-popup/image-popup.component';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.css']
})
export class ShopsComponent {
  shops: any[] = [];
  searchInput: string = '';
  allShops:any[] = [];


  constructor(private service: ServiceService,private route: ActivatedRoute,private location: Location, private dialog: MatDialog,private sanitizer: DomSanitizer) {}
  ngOnInit() {
    this.getshops();
    this.allShops = this.shops;

  }
  getshops(): void {
    this.service.get_shops().subscribe(
      (data) => {
        this.shops = data.map((shop: { imageShop: any, localisationShop: any }) => {
          const imageUrl = `http://localhost:9090/api/mall-1/Shop/images/${shop.imageShop}`;
          const localisationImageUrl = `http://localhost:9090/api/mall-1/Shop/images/${shop.localisationShop}`;
          const safeImageUrl: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(imageUrl);
          const safeLocalisationImageUrl: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(localisationImageUrl);

          return {
            ...shop,
            safeImageShop: safeImageUrl,
            safeLocalisationImage: safeLocalisationImageUrl
          };
        });
        this.allShops = this.shops; 
        // Set the allShops array here
this.shops.reverse();
        console.log(this.shops);
      }
    );
  }
  
  searchProducts(): void {
    console.log("All Shops:", this.allShops);
    
    this.shops = this.allShops.filter(shop =>
      shop.nameShop.toLowerCase().includes(this.searchInput.toLowerCase())
    );
  
    console.log("Filtered Shops:", this.shops);
  }
  resetSearch(): void {
    this.searchInput = '';
    this.shops = this.allShops; 
  }
  goBack(): void {
    this.location.back();
  }
  showImageOnClick(imageUrl: string): void {
    this.dialog.open(ImagePopupComponent, {
      data: { imageUrl },
      panelClass: 'custom-dialog-container' 
    });
  }
  
  
}