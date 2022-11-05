import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListColorsComponent } from './components/app-os/list-colors/list-colors.component';
import { ListDataComponent } from './components/app-os/list-data/list-data.component';
import { ListFontsComponent } from './components/app-os/list-fonts/list-fonts.component';
import { ListGradientsComponent } from './components/app-os/list-gradients/list-gradients.component';
import { ListIconComponent } from './components/app-os/list-icon/list-icon.component';
import { ListMapsComponent } from './components/app-os/list-maps/list-maps.component';
import { ListPalettesComponent } from './components/app-os/list-palettes/list-palettes.component';
import { ListPatternsComponent } from './components/app-os/list-patterns/list-patterns.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DownloadIconComponent } from './components/app-os/list-icon/download-icon/download-icon.component';
import { DownloadMapComponent } from './components/app-os/list-maps/download-map/download-map.component';
import { DownloadPaletteComponent } from './components/app-os/list-palettes/download-palette/download-palette.component';
import { DownloadPatternComponent } from './components/app-os/list-patterns/download-pattern/download-pattern.component';
import { DownloadGradientComponent } from './components/app-os/list-gradients/download-gradient/download-gradient.component';
import { DownloadFontComponent } from './components/app-os/list-fonts/download-font/download-font.component';
import { DownloadDataComponent } from './components/app-os/list-data/download-data/download-data.component';
import { DownloadColorComponent } from './components/app-os/list-colors/download-color/download-color.component';
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
import { ProfilesComponent } from './components/user/profiles/profiles.component';

const routes: Routes = [

  {path:'', component: ManageComponent, children:[
    {path:'', redirectTo:'/explore', pathMatch:"full"},
    {path:'explore', component: WelcomeComponent},
    {path:'who-we-are', component: WhoWeAreComponent},
    {path:'file-a-bug', component: FileBugComponent },
    {path:'getHelp/:topic', component: FileBugComponent },

    {path:'icons', component: ListIconComponent},
    {path:'maps', component: ListMapsComponent},
    {path:'fonts', component: ListFontsComponent},
    {path:'datasets', component: ListDataComponent},
    {path:'palettes', component: ListPalettesComponent},
    {path:'patterns', component: ListPatternsComponent},
    {path:'gradients', component: ListGradientsComponent},
    {path:'colors', component: ListColorsComponent},

    {path:'Periodic-Table-of-Elements', component: PeriodicTableComponent},

    {path:'free-icon/:id', component: DownloadIconComponent},
    {path:'edit-map/:id', component: DownloadMapComponent},
    {path:'each-dataset/:id', component: DownloadDataComponent},
    {path:'view-palette/:id', component: DownloadPaletteComponent},
    {path:'view-gradient/:id', component: DownloadGradientComponent},
    {path:'view-pattern/:id', component: DownloadPatternComponent},
    {path:'opensource-font/:id', component: DownloadFontComponent},
    {path:'shades-of-color/:id', component: DownloadColorComponent},

  ]},

  {path:'sign', component: SignComponent},
  {path:'sign/:go', component: SignComponent},
  {path:'cart/:pack', component: CartComponent},
  {path:'order-status/:id', component: PaymentsComponent},

  {path:'user', component: UserComponent, children:[
    {path:'', redirectTo:'/my-contact-info', pathMatch:"full"},
    {path:'my-contact-info', component: ProfilesComponent},
    {path:'my-profiles', component: ProfilesComponent},
    {path:'manage', component: RegistryComponent},
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
