import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-addshop',
  templateUrl: './addshop.component.html',
  styleUrls: ['./addshop.component.css']
})
export class AddshopComponent {
  isSubmitting = false;
  successMessage = '';
  isSuccess = false;
  selectedImage: File | undefined;
  selectedImageError = false;
  category: any[] = [];
  selectedLocalisationImage: File | undefined;
  selectedLocalisationImageError = false;
  addshop = new FormGroup({
    nameShop: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z ]*")]),
    localisationShop: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
  })

  constructor(private service: ServiceService) { }

  get f() {
    return this.addshop.controls;
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

  ngOnInit() {
    this.getcategory();
  }
  selectLocalisationImage(event: any): void {
    this.selectedLocalisationImage = event.target.files[0];
    this.selectedLocalisationImageError = false;
  }
  selectImage(event: any): void {
    this.selectedImage = event.target.files[0];
    this.selectedImageError = false;
  }

  onSubmit() {
  
    this.selectedImageError = !this.selectedImage;
    this.selectedLocalisationImageError = !this.selectedLocalisationImage;
    const formData = new FormData();
    formData.append('nameShop', this.addshop.value.nameShop!);
    formData.append('idCategory', this.addshop.value.category!);
    formData.append('image', this.selectedImage!);
    formData.append('localisationShop', this.selectedLocalisationImage!); // Use the localisation image

    this.isSubmitting = true;

    this.service.addshop(formData).subscribe(
      (data) => {
        console.log(data);
        this.isSuccess = true;
        this.successMessage = 'Shop ajouté avec succès !';
        this.addshop.reset();
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
