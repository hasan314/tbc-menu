import { Injectable } from '@angular/core';
import * as data from '../../assets/menu.json';
import { MenuCategory } from '../models/menu-category';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }
  
  fetchMenuItems(): Observable<MenuCategory[]> {

    return this.http.get<MenuCategory[]>('./assets/menu.json');
  }
}
