import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AppOsComponent } from './components/app-os/app-os.component';

import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatMenuModule} from '@angular/material/menu';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';

import { ListIconComponent } from './components/app-os/list-icon/list-icon.component';
import { ListMapsComponent } from './components/app-os/list-maps/list-maps.component';
import { ListFontsComponent } from './components/app-os/list-fonts/list-fonts.component';
import { ListPatternsComponent } from './components/app-os/list-patterns/list-patterns.component';
import { ListGradientsComponent } from './components/app-os/list-gradients/list-gradients.component';
import { ListColorsComponent } from './components/app-os/list-colors/list-colors.component';
import { ListPalettesComponent } from './components/app-os/list-palettes/list-palettes.component';
import { ListDataComponent } from './components/app-os/list-data/list-data.component';
import { UpcomingComponent } from './placeholders/upcoming/upcoming.component';
import { ManageComponent } from './components/manage/manage.component';
import { AddIconComponent } from './components/app-os/list-icon/add-icon/add-icon.component';
import { AddDataComponent } from './components/manage/add-data/add-data.component';
import { AddPaletteComponent } from './components/manage/add-palette/add-palette.component';
import { AddPatternComponent } from './components/app-os/list-patterns/add-pattern/add-pattern.component';
import { AddGradientComponent } from './components/manage/add-gradient/add-gradient.component';

import { provideFirebaseApp, getApp, initializeApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { provideAnalytics,getAnalytics,ScreenTrackingService,UserTrackingService } from '@angular/fire/analytics';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideMessaging,getMessaging } from '@angular/fire/messaging';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { environment } from 'src/environments/environment';
import { SafePipe } from './pipes/safe.pipe';
import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DownloadIconComponent } from './components/app-os/list-icon/download-icon/download-icon.component';
import { DownloadMapComponent } from './components/app-os/list-maps/download-map/download-map.component';
import { DownloadPaletteComponent } from './components/app-os/list-palettes/download-palette/download-palette.component';
import { DownloadPatternComponent } from './components/app-os/list-patterns/download-pattern/download-pattern.component';
import { DownloadGradientComponent } from './components/app-os/list-gradients/download-gradient/download-gradient.component';
import { DownloadFontComponent } from './components/app-os/list-fonts/download-font/download-font.component';
import { DownloadDataComponent } from './components/app-os/list-data/download-data/download-data.component';
import { DownloadColorComponent } from './components/app-os/list-colors/download-color/download-color.component';
import { AddMapComponent } from './components/app-os/list-maps/add-map/add-map.component';
import { AddFontComponent } from './components/manage/add-font/add-font.component';
import { LoadingComponent } from './placeholders/loading/loading.component';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { SignComponent } from './placeholders/sign/sign.component';
import { VerifyOTPComponent } from './placeholders/verify-otp/verify-otp.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';
import { FileBugComponent } from './components/file-bug/file-bug.component';

//import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    AppOsComponent,
    ListIconComponent,
    ListMapsComponent,
    ListFontsComponent,
    ListPatternsComponent,
    ListGradientsComponent,
    ListColorsComponent,
    ListPalettesComponent,
    ListDataComponent,
    UpcomingComponent,
    ManageComponent,
    AddIconComponent,
    AddDataComponent,
    AddPaletteComponent,
    AddPatternComponent,
    AddGradientComponent,
    SafePipe,
    SafeHtmlPipe,
    DownloadIconComponent,
    DownloadMapComponent,
    DownloadPaletteComponent,
    DownloadPatternComponent,
    DownloadGradientComponent,
    DownloadFontComponent,
    DownloadDataComponent,
    DownloadColorComponent,
    AddMapComponent,
    AddFontComponent,
    LoadingComponent,
    SignComponent,
    VerifyOTPComponent,
    WhoWeAreComponent,
    FileBugComponent
  ],
  imports: [
    //ScrollingModule,

    BrowserModule,
    AppRoutingModule, FormsModule, ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule, HttpClientJsonpModule,

    MatButtonModule,
    MatTabsModule,MatSidenavModule, MatIconModule, MatTooltipModule, MatFormFieldModule, MatInputModule,MatSelectModule, MatDialogModule, MatMenuModule, MatSnackBarModule,
    
    MatAutocompleteModule, MatSlideToggleModule, MatBottomSheetModule,

    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAnalytics(() => getAnalytics()), 
    provideAuth(() => getAuth()), 
    provideMessaging(() => getMessaging()), 
    provideStorage(() => getStorage()),
    provideFirestore(() => getFirestore()),
  
  ],
  providers: [
    ScreenTrackingService,UserTrackingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
