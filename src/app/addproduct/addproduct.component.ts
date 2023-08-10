import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {
  isSubmitting = false;
  successMessage = '';
  isSuccess = false;
  selectedImage: File | undefined;
  selectedImageError = false;
  shops: any[] = [];

  addPod = new FormGroup({
    nameProduct: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z ]*")]),
    price: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    shop: new FormControl('', [Validators.required]),
    descriptionProduct: new FormControl('', [Validators.required]),
  });

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.getShops();
  }

  get f() {
    return this.addPod.controls;
  }

  getShops() {
    this.service.get_shops().subscribe(
      (data) => {
        this.shops = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  selectImage(event: any): void {
    this.selectedImage = event.target.files[0];
    this.selectedImageError = false;
  }

  onSubmit() {
    if (!this.addPod.valid || !this.selectedImage) {
      alert('Please fill all the fields and select an image !!');
      this.selectedImageError = !this.selectedImage;
      return;
    }
  
    this.isSubmitting = true;
  
    const formData = new FormData();
    formData.append('nameProduct', this.addPod.value.nameProduct!);
    formData.append('price', this.addPod.value.price!);
    formData.append('idShop', this.addPod.value.shop!); // Add the idShop parameter
    formData.append('descriptionProduct', this.addPod.value.descriptionProduct!);
    formData.append('image', this.selectedImage);
  
    this.service.addProd(formData).subscribe(
      (data) => {
        console.log(data);
        this.isSuccess = true;
        this.successMessage = 'Product added successfully!';
        this.addPod.reset();
      },
      (error) => {
        console.error(error);
      },
      () => {
        this.isSubmitting = false;
      }
    );
  }
  
}
