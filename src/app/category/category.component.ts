import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { Route, Router } from '@angular/router';
import { Location } from '@angular/common';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  categories: any[] = [];
    Category:any;
  constructor(private service:ServiceService ,private router:Router,private location: Location , private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.getCategories();
    
  }
    goBack(): void {
    this.location.back();
  }
  
  getCategories(): void {
    this.service.get_categories().subscribe(
      (data) => {
        this.categories = data.map((category: { imageCategory: any; }) => {
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
   navigateToShops(categoryId: number): void {
    this.router.navigate(['/shops-by-cat', categoryId]);
  }
     
}
