import { RouterModule,Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { BuyerComponent } from './buyer/buyer.component'
import { SellerComponent } from './seller/seller.component';
import { MatchComponent } from './match/match.component';

export const router:Routes=[
    {path:'',redirectTo:"/buyer",pathMatch:"full"},
    {path:"buyer",component:BuyerComponent},
    {path:"seller",component:SellerComponent},
    {path:"match",component:MatchComponent}
]

export const routes = RouterModule.forRoot(router);