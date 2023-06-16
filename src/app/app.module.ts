import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { DividerModule } from 'primeng/divider';
import { ImageModule } from 'primeng/image';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { GalleriaModule } from 'primeng/galleria';
import { MenubarModule } from 'primeng/menubar';
import { PanelMenuModule } from 'primeng/panelmenu';
import { FieldsetModule } from 'primeng/fieldset';
import { CardModule } from 'primeng/card';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { MessagesModule } from 'primeng/messages';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { IndexComponent } from './index/index.component';
import { HerramientasComponent } from './menu-vertical/objetos/herramientas/herramientas.component';
import { RopaComponent } from './menu-vertical/objetos/ropa/ropa.component';
import { MueblesComponent } from './menu-vertical/objetos/muebles/muebles.component';
import { ElAldeanoComponent } from './menu-vertical/personajes/el-aldeano/el-aldeano.component';
import { PersonajesPrincipalesComponent } from './menu-vertical/personajes/personajes-principales/personajes-principales.component';
import { VecinosComponent } from './menu-vertical/personajes/vecinos/vecinos.component';

import { CasaComponent } from './menu-vertical/localizaciones/en-la-isla/casa/casa.component';
import { AerodromoComponent } from './menu-vertical/localizaciones/en-la-isla/aerodromo/aerodromo.component';
import { MininookComponent } from './menu-vertical/localizaciones/en-la-isla/mininook/mininook.component';
import { HermanasManitasComponent } from './menu-vertical/localizaciones/en-la-isla/hermanas-manitas/hermanas-manitas.component';
import { MuseoComponent } from './menu-vertical/localizaciones/en-la-isla/museo/museo.component';
import { CayoFaunoComponent } from './menu-vertical/localizaciones/fuera-isla/cayo-fauno/cayo-fauno.component';
import { HhpComponent } from './menu-vertical/localizaciones/fuera-isla/hhp/hhp.component';
import { OficinaGestionComponent } from './menu-vertical/localizaciones/en-la-isla/oficina-gestion/oficina-gestion.component';
import { FosilesComponent } from './menu-vertical/colecciones/fosiles/fosiles.component';
import { ArteComponent } from './menu-vertical/colecciones/arte/arte.component';
import { BichosComponent } from './menu-vertical/colecciones/bichos/bichos.component';
import { PecesComponent } from './menu-vertical/colecciones/peces/peces.component';
import { CriaturasMarinasComponent } from './menu-vertical/colecciones/criaturas-marinas/criaturas-marinas.component';

import { environment } from './environments/environment';
import { ServiceAuth } from './services/auth.service';
import { SharedService } from './services/shared.service';
import { NavbarComponent } from './navbar/navbar/navbar.component';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';

import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';

import { MatDialogModule } from '@angular/material/dialog';

import {AngularTwitterTimelineModule} from "angular-twitter-timeline";

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    HerramientasComponent,
    RopaComponent,
    MueblesComponent,
    ElAldeanoComponent,
    PersonajesPrincipalesComponent,
    VecinosComponent,
    CasaComponent,
    AerodromoComponent,
    MininookComponent,
    HermanasManitasComponent,
    MuseoComponent,
    CayoFaunoComponent,
    HhpComponent,
    OficinaGestionComponent,
    FosilesComponent,
    ArteComponent,
    BichosComponent,
    PecesComponent,
    CriaturasMarinasComponent,
    NavbarComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    PanelMenuModule,
    DividerModule,
    ImageModule,
    ButtonModule,
    AccordionModule,
    GalleriaModule,
    FieldsetModule,
    FormsModule,
    CardModule,
    HttpClientModule,
    TagModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    MatDialogModule,
    AngularTwitterTimelineModule,
    MessagesModule,

  ],
  providers: [ServiceAuth, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
