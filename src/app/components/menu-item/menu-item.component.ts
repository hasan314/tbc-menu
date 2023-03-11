import { Component, Input } from '@angular/core';
import { MenuCategory } from 'src/app/models/menu-category';
import { MenuItem } from 'src/app/models/menu-item';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent {

  @Input() category!: MenuCategory;
  tabCollapsed = false;


  categoryClicked(){
    this.tabCollapsed = !this.tabCollapsed;
  }

}
