import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-viewshop',
  templateUrl: './viewshop.component.html',
  styleUrls: ['./viewshop.component.css']
})
export class ViewshopComponent implements OnInit {
  isModif = false;
  shops: any[] = [];
  selectedidShop: number | null = null;
  selectedImage: File | undefined;
  selectedImageError = false;
  selectedLocalisationImage: File | undefined;
  selectedLocalisationImageError = false;
  category: any[] = [];

  addshop = new FormGroup({
    nameShop: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z ]*")]),
    imageShop: new FormControl(''),
    localisationShop: new FormControl(''),
    category: new FormControl('', [Validators.required]),
  });

  constructor(private service: ServiceService, private sanitizer: DomSanitizer) {}

  get f() {
    return this.addshop.controls;
  }

  ngOnInit() {
    this.getshops();
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
        console.log(this.shops);
      }
    );
  }

  selectImage(event: any): void {
    this.selectedImage = event.target.files[0];
    this.selectedImageError = false;
  }

  selectLocalisationImage(event: any): void {
    this.selectedLocalisationImage = event.target.files[0];
    this.selectedLocalisationImageError = false;
  }

  getcategory() {
    this.service.get_categories().subscribe(
      (data) => {
        console.log(data);
        this.category = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onSubmit() {
    if (this.addshop.valid) {
      if (this.selectedidShop !== null) {
        const formData = new FormData();
        formData.append('nameShop', this.addshop.value.nameShop!);
        formData.append('localisationShop', this.addshop.value.localisationShop!);
        formData.append('category', this.addshop.value.category!);

        if (this.selectedImage) {
          formData.append('newImage', this.selectedImage);
        }

        if (this.selectedLocalisationImage) {
          formData.append('newLocalisationImage', this.selectedLocalisationImage);
        }

        this.service.updateshop(this.selectedidShop, formData).subscribe(
          (data) => {
            console.log('Shop updated successfully:', data);
            this.selectedidShop = null;
            this.isModif = false;
            this.getshops();
          },
          (error) => {
            console.error('Error updating shop:', error);
          }
        );
      }
    }
  }

  editshop(idShop: number) {
    this.isModif = true;
    this.selectedidShop = idShop;
    this.getcategory();

    const selectedShop = this.shops.find((c) => c.idShop === idShop);
    if (selectedShop) {
      this.addshop.patchValue({
        nameShop: selectedShop.nameShop,
        imageShop: '',
        localisationShop: selectedShop.localisationShop,
        category: selectedShop.category.idCategory,
      });
    }
  }

  deleteshop(idShop: number) {
    if (confirm('êtes-vous sûr ?')) {
      this.service.deleteshop(idShop).subscribe(
        () => {
          this.shops = this.shops.filter((c) => c.idShop !== idShop);
          console.log('Shop deleted successfully');
        },
        (error) => {
          console.error('Error deleting shop:', error);
        }
      );
    }
  }
}
