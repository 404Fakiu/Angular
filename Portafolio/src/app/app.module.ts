import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

//Rutas
import {app_routing} from './app.routes';

//servicios
import {InformacionService} from './services/informacion.service';
import {ProductosService} from './services/productos.service';


//componentes
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ItemDetailComponent,
    SearchComponent,
    SearchComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    app_routing
  ],
  providers: [
    InformacionService,
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
