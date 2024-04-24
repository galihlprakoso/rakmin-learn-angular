import { Component } from '@angular/core';
import { ProductListComponent } from '../../components/product-list/product-list.component';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [
    ProductListComponent
  ],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {

}
