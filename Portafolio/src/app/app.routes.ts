import {RouterModule,Routes} from '@angular/router';

import {
			AboutComponent,
			ItemDetailComponent,
			HomeComponent,
			SearchComponent
	   } from "./components/index.paginas"

const app_routes:Routes=[
		{path:'home',component:HomeComponent},
		{path:'about',component:AboutComponent},
		{path:'buscar/:criterio',component:SearchComponent},
		{path:'detail/:id',component:ItemDetailComponent},
		{path:'**',pathMatch:'full',redirectTo:'home'}
];

export const app_routing=RouterModule.forRoot(app_routes,{useHash:true});