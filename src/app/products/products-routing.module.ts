import { RouterModule, Routes } from "@angular/router";
import { ProductsPageComponent } from "./pages/products-page/products-page.component";
import { NgModule } from "@angular/core";


const routes: Routes = [
  {path: 'products', component: ProductsPageComponent}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}