import { Component, OnInit } from '@angular/core';
import { MenuCategory } from 'src/app/models/menu-category';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu-container',
  templateUrl: './menu-container.component.html',
  styleUrls: ['./menu-container.component.scss']
})
export class MenuContainerComponent implements OnInit {

  data: MenuCategory[] = [];

  constructor(private menuService: MenuService){}

  ngOnInit(): void {
    this.menuService.fetchMenuItems()
      .subscribe(response => this.data = response);
  }



}
