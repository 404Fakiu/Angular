import {RouterModule,Routes} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {SearchComponent} from './components/search/search.component';




const APP_ROUTES:Routes=[
    {path:'home',component:HomeComponent},
    {path:'search',component:SearchComponent},
    // {path:'heroes',component:HeroesComponent},
    // {path:'heroe/:id',component:HeroeDetailComponent},
    // {path:'search/:criteria',component:ResultSearcComponent},
    {path:'**',pathMatch:'full',redirectTo:'home'}
    
];

export const APP_ROUTING=RouterModule.forRoot(APP_ROUTES,{useHash:true});