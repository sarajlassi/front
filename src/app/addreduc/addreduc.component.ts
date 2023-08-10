import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
  selector: 'app-addreduc',
  templateUrl: './addreduc.component.html',
  styleUrls: ['./addreduc.component.css']
})
export class AddreducComponent {
    isSubmitting = false;
  successMessage = '';
  isSuccess = false;
  products: any[] = [];
  calculatedNewPrice: number = 0;

  addReductionForm = new FormGroup({
    nameReduction: new FormControl('', [Validators.required]),
    newprice: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    pourcentage: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    
    product: new FormControl('', [Validators.required]),
  });

  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.service.get_products().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  get f() {
    return this.addReductionForm.controls;
  }

  onSubmit() {
    if (!this.addReductionForm.valid) {
      alert('Veuillez remplir tous les champs obligatoires.');
      return;
    }
    
    const selectedProductId = this.addReductionForm.value.product;
    
    const selectedProduct = this.products.find(product => product.idProduct === selectedProductId);
    
    const reductionData = {
      nameReduction: this.addReductionForm.value.nameReduction,
      newprice: this.addReductionForm.value.newprice,
      pourcentage: this.addReductionForm.value.pourcentage,
      
      product: {
        idProduct: selectedProductId
      }
    };

    this.service.addred(reductionData).subscribe(
      (data) => {
        this.isSuccess = true;
        this.successMessage = 'Réduction ajoutée avec succès !';
        this.addReductionForm.reset();
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