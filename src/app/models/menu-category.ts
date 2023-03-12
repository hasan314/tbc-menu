import { MenuItem } from "./menu-item";

export interface MenuCategory{
    type: string;
    items: MenuItem[];
}