import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { ProductDto } from '../models/productDto';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  products: ProductDto[];

  constructor(private globalService: GlobalService) { }

  ngOnInit(): void {
    this.globalService.getProducts().subscribe(res => {
      this.products = JSON.parse(JSON.stringify(res));
    });

    this.sortOptions = [
            {label: 'Ascending', value: 'price'},
            {label: 'Descending', value: '!price'}
    ];
  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    } else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}

}
