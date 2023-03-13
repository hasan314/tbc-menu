import { Component, Input } from '@angular/core';
import { MenuItem } from 'src/app/models/menu-item';

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.scss']
})
export class ItemDisplayComponent {
  @Input() item!: MenuItem;
  prefix = '₹';
}
