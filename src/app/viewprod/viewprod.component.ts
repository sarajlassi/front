import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-viewprod',
  templateUrl: './viewprod.component.html',
  styleUrls: ['./viewprod.component.css']
})
export class ViewprodComponent implements OnInit {
  isModif = false;
  products: any[] = [];
  selectedidProduct: number | null = null;
  selectedImage: File | undefined;
  selectedImageError = false;
  shops: any[] = [];

  addPod = new FormGroup({
    nameProduct: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z ]*")]),
    price: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    shop: new FormControl('', [Validators.required]),
    imageProduct: new FormControl(''),
    descriptionProduct: new FormControl('', [Validators.required]),
  });

  constructor(private service: ServiceService, private sanitizer: DomSanitizer) {}

  get f() {
    return this.addPod.controls;
  }

  ngOnInit() {
    this.getprod();
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
        this.products.reverse();
                console.log(this.products);
      }
    );
  }

  selectImage(event: any): void {
    this.selectedImage = event.target.files[0];
    this.selectedImageError = false;
  }

  onSubmit() {
    if (this.addPod.valid) {
      if (this.selectedidProduct !== null) {
        const formData = new FormData();
        formData.append('nameProduct', this.addPod.value.nameProduct!);
        formData.append('price', this.addPod.value.price!);
        formData.append('shop', this.addPod.value.shop!);
        formData.append('descriptionProduct', this.addPod.value.descriptionProduct!);

        if (this.selectedImage) {
          formData.append('newImage', this.selectedImage);
        }

        this.service.updateprod(this.selectedidProduct, formData).subscribe(
          (data) => {
            console.log('Product updated successfully:', data);
            this.selectedidProduct = null;
            this.isModif = false;
            this.getprod();
          },
          (error) => {
            console.error('Error updating product:', error);
          }
        );
      }
    }
  }

  editprod(idProduct: number) {
    this.isModif = true;
    this.selectedidProduct = idProduct;
    const selectedprod = this.products.find((c) => c.idProduct === idProduct);
    if (selectedprod) {
      this.getShops();

      this.addPod.patchValue({
        nameProduct: selectedprod.nameProduct,
        price: selectedprod.price,
        shop: selectedprod.shop.idShop,
        imageProduct: '',
        descriptionProduct: selectedprod.descriptionProduct
      });
    }
  }

  getShops(): void {
    this.service.get_shops().subscribe(
      (data) => {
        this.shops = data;
      },
      (error) => {
        console.error('Error fetching shops:', error);
      }
    );
  }

  deleteprod(idProduct: number) {
    if (confirm('êtes-vous sûr ?')) {
      this.service.deletprod(idProduct).subscribe(
        () => {
          this.products = this.products.filter((c) => c.idProduct !== idProduct);
          console.log('Product deleted successfully');
        },
        (error) => {
          console.error('Error deleting product:', error);
        }
      );
    }
  }
}
