import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { DemoComponent } from './demo/demo.component';
import { WhyusComponent } from './whyus/whyus.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  }, 
  {
    path: "about", component: AboutComponent
  },
  {
    path: "demo", component: DemoComponent
  },
  {
    path: "pricing", component: PricingComponent
  },
  {
    path: "whyus", component: WhyusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
