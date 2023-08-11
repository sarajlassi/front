import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-viewcat',
  templateUrl: './viewcat.component.html',
  styleUrls: ['./viewcat.component.css']
})
export class ViewcatComponent implements OnInit {
  isModif = false;
  categories: any[] = [];
  selectedCategoryId: number | null = null;
  selectedImage: File | undefined;
  selectedImageError = false;

  addcat = new FormGroup({
    nameCategory: new FormControl('', [Validators.required, Validators.pattern("[A-Za-z ]*")]),
    imageCategory: new FormControl(''),
  });

  constructor(private service: ServiceService, private sanitizer: DomSanitizer) {}

  get f() {
    return this.addcat.controls;
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.service.get_categories().subscribe(
      (data) => {
        this.categories = data.map((category: { imageCategory: any }) => {
          const imageUrl = `http://localhost:9090/api/mall-1/Category/images/${category.imageCategory}`;
          const safeImageUrl: SafeUrl = this.sanitizer.bypassSecurityTrustUrl(imageUrl);

          return {
            ...category,
            safeImageCategory: safeImageUrl
          };
        });
        console.log(this.categories);
      }
    );
  }

  editCategory(categoryId: number) {
    this.isModif = true;
    this.selectedCategoryId = categoryId;
    const selectedCategory = this.categories.find((c) => c.idCategory === categoryId);
    if (selectedCategory) {
      this.addcat.patchValue({
        nameCategory: selectedCategory.nameCategory,
        imageCategory: ''
      });
    }
  }

  selectImage(event: any): void {
    this.selectedImage = event.target.files[0];
    this.selectedImageError = false;
  }

  onSubmit() {
    if (this.addcat.valid) {
      if (this.selectedCategoryId !== null) {
        const formData = new FormData();
        formData.append('nameCategory', this.addcat.value.nameCategory!);
        if (this.selectedImage) {
          formData.append('newImage', this.selectedImage);
        }

        this.service.updateCategory(this.selectedCategoryId, formData).subscribe(
          (data) => {
            console.log('Category updated successfully:', data);
            this.selectedCategoryId = null;
            this.isModif = false;
            this.getCategories();
          },
          (error) => {
            console.error('Error updating category:', error);
          }
        );
      }
    }
  }
  deleteCategory(idCategory: number) {
    if (confirm('Êtes-vous sûr ?')) {
      this.service.deletcat(idCategory).subscribe(
        () => {
          this.categories = this.categories.filter((c) => c.idCategory !== idCategory);
          console.log('Category deleted successfully');
        },
        (error) => {
          console.error('Error deleting category:', error);
        }
      );
    }
  }
}
