import {Routes} from '@angular/router';

import {CatalogComponent} from '../catalog/catalog.component';
import {HomeComponent} from '../home/home.component';
import {ContactComponent} from '../contact/contact.component';
import {ItemDetailComponent} from '../item-detail/item-detail.component';
import {AboutComponent} from '../about/about.component';

import {CategoryComponent} from '../catalog/category/category.component';
import {LlantasComponent} from '../catalog/category/llantas/llantas.component';
import {ExcavadorasComponent} from '../catalog/category/excavadoras/excavadoras.component';
import {BobcatsComponent} from '../catalog/category/bobcats/bobcats.component';
import {TractoresComponent} from '../catalog/category/tractores/tractores.component';
import {ModelComponent} from '../model/model.component';
import {BrandComponent} from '../catalog/brand/brand.component';
import {CapacityComponent} from '../capacity/capacity.component';
import {PriceComponent} from '../price/price.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'catalog', component: CatalogComponent,
    children: [
      {path: 'category', component: CategoryComponent,
      children: [
        {path: 'tractores', component: TractoresComponent},
        {path: 'bobcats', component: BobcatsComponent},
        {path: 'excavadoras', component: ExcavadorasComponent},
        {path: 'llantas', component: LlantasComponent}
      ]
      },
      {path: 'model', component: ModelComponent},
      {path: 'brand', component: BrandComponent},
      {path: 'capacity', component: CapacityComponent},
      {path: 'price', component: PriceComponent}
    ]},
  {path: 'contactus', component: ContactComponent},
  {path: 'aboutus', component: AboutComponent},
  {path: 'itemdetail/:id', component: ItemDetailComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];
