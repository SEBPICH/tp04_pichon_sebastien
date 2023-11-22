import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../components/product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';
import { CatalogService } from './catalog.service';
import { ProductSearchComponent } from '../components/product-search/product-search.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, FormsModule],
  declarations: [ProductListComponent, ProductSearchComponent, FilterPipe],

  exports: [CatalogService],
})
export class CatalogModule {}