import {Routes} from '@angular/router';

import {CatalogComponent} from '../catalog/catalog.component';
import {HomeComponent} from '../home/home.component';
import {ContactComponent} from '../contact/contact.component';
import {ItemDetailComponent} from '../item-detail/item-detail.component';
import {AboutComponent} from '../about/about.component';
import {MotocultoresComponent} from '../motocultores/motocultores.component';
import {PalasCargadorasComponent} from '../palas-cargadoras/palas-cargadoras.component';
import {TractorComponent} from '../tractor/tractor.component';
import {CategoryComponent} from '../category/category.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'catalog', component: CatalogComponent,
    children: [
      {path: 'category', component: CategoryComponent},
      {path: 'tractor', component: TractorComponent},
      {path: 'motocultores', component: MotocultoresComponent},
      {path: 'palas-cargadoras', component: PalasCargadorasComponent},
    ]},
  {path: 'contactus', component: ContactComponent},
  {path: 'aboutus', component: AboutComponent},
  {path: 'itemdetail/:id', component: ItemDetailComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];
