import { Routes } from '@angular/router';
import { WishlistPage } from './pages/wishlist/wishlist.page';
import { CartPage } from './pages/cart/cart.page';

export const routes: Routes = [

     { path: 'wishlist', component: WishlistPage },
      { path: 'cart', component: CartPage }
];
