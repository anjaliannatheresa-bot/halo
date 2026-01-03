import { Routes } from '@angular/router';
import { Newyear } from './pages/newyear/newyear';
import { Product } from './product/product';
export const routes: Routes = [
    
        {path:'newyear',component:Newyear},{path:'',component:Product},

     ]