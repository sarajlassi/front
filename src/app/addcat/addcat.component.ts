import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-addcat',
  templateUrl: './addcat.component.html',
  styleUrls: ['./addcat.component.css']
})
export class AddcatComponent {
  isSubmitting = false; 
  successMessage = '';
  isSuccess = false;
  selectedImage: File | undefined;
  selectedImageError = false;

  addcat = new FormGroup({
    nameCategory: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z ]*")]),
  })

  constructor(private service: ServiceService) { }

  get f() {
    return this.addcat.controls;
  }

  selectImage(event: any): void {
    this.selectedImage = event.target.files[0];
    this.selectedImageError = false;
  }

  onSubmit() {
    if (!this.addcat.valid || !this.selectedImage) {
      alert('Please fill all the fields and select an image !!');
      this.selectedImageError = !this.selectedImage;
      return;
    }
  
    const formData = new FormData();
    formData.append('nameCategory', this.addcat.value.nameCategory!);
    formData.append('image', this.selectedImage);
  
    this.isSubmitting = true;
  
    this.service.addcat(formData).subscribe(
      (data) => {
        console.log(data);
        this.isSuccess = true;
        this.successMessage = 'Category added successfully !! !';
        this.addcat.reset();
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
