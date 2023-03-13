import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { HeaderComponent } from './components/main-layout/header/header.component';
import { MenuContainerComponent } from './components/menu-container/menu-container.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { ItemDisplayComponent } from './components/item-display/item-display.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HeaderComponent,
    MenuContainerComponent,
    MenuItemComponent,
    ItemDisplayComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
