import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { NewProductComponent } from './components/new-product/new-product.component';
import { DeleteProductComponent } from './components/delete-product/delete-product.component';
import { DetailsComponent } from './components/details/details.component';

const appRoutes = [
  //{ path: '/', component: ListComponent },
  { path: 'new', component: NewProductComponent },
  //{ path: ':num', component: ListComponent },
  { path: 'delete/:id', component: DeleteProductComponent },
  { path: 'details/:id', component: DetailsComponent },
];
export const routing = RouterModule.forRoot(appRoutes);
