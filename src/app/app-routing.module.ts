import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListFontsComponent } from './components/app-os/list-fonts/list-fonts.component';
import { ListGradientsComponent } from './components/app-os/list-gradients/list-gradients.component';
import { ListIconsComponent } from './components/app-os/list-icons/list-icons.component';
import { ListMapsComponent } from './components/app-os/list-maps/list-maps.component';
import { ListPalettesComponent } from './components/app-os/list-palettes/list-palettes.component';
import { ListPatternsComponent } from './components/app-os/list-patterns/list-patterns.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DownloadIconComponent } from './components/app-os/list-icons/download-icon/download-icon.component';
import { DownloadMapComponent } from './components/app-os/list-maps/download-map/download-map.component';
import { DownloadPaletteComponent } from './components/app-os/list-palettes/download-palette/download-palette.component';
import { DownloadPatternComponent } from './components/app-os/list-patterns/download-pattern/download-pattern.component';
import { DownloadGradientComponent } from './components/app-os/list-gradients/download-gradient/download-gradient.component';
import { DownloadFontComponent } from './components/app-os/list-fonts/download-font/download-font.component';
import { ManageComponent } from './components/manage/manage.component';
import { SignComponent } from './placeholders/sign/sign.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { FileBugComponent } from './components/file-bug/file-bug.component';
import { CartComponent } from './components/cart/cart.component';
import { PaymentsComponent } from './placeholders/payments/payments.component';
import { PeriodicTableComponent } from './components/app-ov/periodic-table/periodic-table.component';
import { AppOsComponent } from './components/app-os/app-os.component';
import { UserComponent } from './components/user/user.component';
import { RegistryComponent } from './components/user/registry/registry.component';
import { ListDatasetsComponent } from './components/app-os/list-datasets/list-datasets.component';
import { DownloadDatasetComponent } from './components/app-os/list-datasets/download-dataset/download-dataset.component';
import { ListShadesComponent } from './components/app-os/list-shades/list-shades.component';
import { DownloadShadeComponent } from './components/app-os/list-shades/download-shade/download-shade.component';
import { ReferComponent } from './components/user/refer/refer.component';
import { AboutComponent } from './components/manage/about/about.component';

const routes: Routes = [

  {path:'about/:page', component: AboutComponent },
  
  {path:'sign', component: SignComponent},
  {path:'sign/:go', component: SignComponent},
  {path:'cart/:pack', component: CartComponent},
  {path:'order-status/:id', component: PaymentsComponent},

  {path:'user', component: UserComponent, children:[
    {path:'', redirectTo:'/manage', pathMatch:"full"},
    {path:'manage', component: RegistryComponent},
  ]},

  {path:'', component: ManageComponent, children:[
    {path:'', redirectTo:'/explore', pathMatch:"full"},
    {path:'explore', component: WelcomeComponent},
    {path:'influencers', component: ReferComponent },
    {path:'who-we-are', component: WhoWeAreComponent},
    {path:'file-a-bug', component: FileBugComponent },
    {path:'getHelp/:topic', component: FileBugComponent },

    {path:'icons', component: ListIconsComponent},
    {path:'outline-icons', component: ListIconsComponent},
    {path:'filled-icons', component: ListIconsComponent},
    {path:'duotone-icons', component: ListIconsComponent},
    {path:'vibrant-icons', component: ListIconsComponent},
    {path:'animated-icons', component: ListIconsComponent},
    {path:'flags-and-seals', component: ListIconsComponent},
    {path:'icons/:name', component: ListIconsComponent},
    {path:'outline-icons/:name', component: ListIconsComponent},
    {path:'filled-icons/:name', component: ListIconsComponent},
    {path:'duotone-icons/:name', component: ListIconsComponent},
    {path:'vibrant-icons/:name', component: ListIconsComponent},
    {path:'animated-icons/:name', component: ListIconsComponent},
    {path:'flags-and-seals/:name', component: ListIconsComponent},

    {path:'maps', component: ListMapsComponent},
    {path:'electoral-maps', component: ListMapsComponent},
    {path:'geography-maps', component: ListMapsComponent},
    {path:'historical-maps', component: ListMapsComponent},
    
    {path:'fonts', component: ListFontsComponent},
    {path:'datasets', component: ListDatasetsComponent},
    {path:'palettes', component: ListPalettesComponent},
    {path:'patterns', component: ListPatternsComponent},
    {path:'gradients', component: ListGradientsComponent},
    {path:'shades', component: ListShadesComponent},

    {path:'Periodic-Table-of-Elements', component: PeriodicTableComponent},

    {path:'free-icon/:id', component: DownloadIconComponent},
    {path:'edit-map/:id', component: DownloadMapComponent},
    {path:'each-dataset/:id', component: DownloadDatasetComponent},
    {path:'view-palette/:id', component: DownloadPaletteComponent},
    {path:'view-gradient/:id', component: DownloadGradientComponent},
    {path:'view-pattern/:id', component: DownloadPatternComponent},
    {path:'opensource-font/:id', component: DownloadFontComponent},
    {path:'shades-of-color/:id', component: DownloadShadeComponent},

  ]},

  {path:'**', redirectTo:'/explore', pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // // Restore the last scroll position
    scrollPositionRestoration: 'enabled',
    // scrollOffset: [0, 0],
    // // Enable scrolling to anchors
    anchorScrolling: "enabled",
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
