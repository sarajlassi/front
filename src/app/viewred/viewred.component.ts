import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-viewred',
  templateUrl: './viewred.component.html',
  styleUrls: ['./viewred.component.css']
})
export class ViewredComponent {
  isModif = false;
  isSubmitting = false;
  successMessage = '';
  isSuccess = false;
  reductions: any[] = [];
  selectedIdReduction: number | null = null;
  products: any[] = []; 

  addReductionForm = new FormGroup({
    nameReduction: new FormControl('', [Validators.required]),
    newprice: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    pourcentage: new FormControl('', [Validators.required, Validators.pattern("[0-9]*")]),
    product: new FormControl('', [Validators.required]),
  });

  constructor(private service: ServiceService) { }

  get f() {
    return this.addReductionForm.controls;
  }

  ngOnInit() {
    this.getReductions();
    this.getProducts(); 
  }

  getReductions() {
    this.service.get_reduction().subscribe(
      (data) => {
        this.reductions = data;
        this.reductions.reverse();
      },
      (error) => {
        console.error('Error fetching reductions:', error);
      }
    );
  }
  onLogout() {
    // Perform logout logic here, such as clearing local storage or any other necessary steps
    // For example:
    localStorage.removeItem('role');}
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

    this.service.updatered(this.selectedIdReduction,reductionData).subscribe(
      (data) => {
        console.log('Reduction updated successfully:', data);
        this.selectedIdReduction = null;
        this.isModif = false;
        this.getReductions();   this.isSuccess = true;
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
  

  editReduction(idReduction: number) {
    this.isModif = true;
    this.selectedIdReduction = idReduction;
    const selectedReduction = this.reductions.find((r) => r.idReduction === idReduction);
    if (selectedReduction) {
      this.addReductionForm.patchValue({
        nameReduction: selectedReduction.nameReduction,
        newprice: selectedReduction.newprice,
        pourcentage: selectedReduction.pourcentage,
        product: selectedReduction.product.idProduct
      });
    }
  }

  deleteReduction(idReduction: number) {
  if (confirm('Êtes-vous sûr ?')) {
    this.service.deletred(idReduction).subscribe(
      () => {
        console.log('Reduction deleted successfully');
        this.reductions = this.reductions.filter((r) => r.idReduction !== idReduction);
        console.log('Updated reductions array:', this.reductions);
      },
      (error) => {
        console.error('Error deleting reduction:', error);
      }
    );
  }
}


 
}