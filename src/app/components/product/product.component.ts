import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/product.model';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Output() productClicked: EventEmitter<any>=new EventEmitter();

  addCart() {
    this.productClicked.emit(this.product.id);
    console.log('añadir la carrito');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
