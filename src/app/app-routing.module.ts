import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// OBJETOS
import { HerramientasComponent } from './menu-vertical/objetos/herramientas/herramientas.component';
import { RopaComponent } from './menu-vertical/objetos/ropa/ropa.component';
import { MueblesComponent } from './menu-vertical/objetos/muebles/muebles.component';

// PERSONAJES
import { ElAldeanoComponent } from './menu-vertical/personajes/el-aldeano/el-aldeano.component';
import { PersonajesPrincipalesComponent } from './menu-vertical/personajes/personajes-principales/personajes-principales.component';
import { VecinosComponent } from './menu-vertical/personajes/vecinos/vecinos.component';

// LOCALIZACIONES: EN LA ISLA
import { CasaComponent } from './menu-vertical/localizaciones/en-la-isla/casa/casa.component';
import { AerodromoComponent } from './menu-vertical/localizaciones/en-la-isla/aerodromo/aerodromo.component';
import { MininookComponent } from './menu-vertical/localizaciones/en-la-isla/mininook/mininook.component';
import { HermanasManitasComponent } from './menu-vertical/localizaciones/en-la-isla/hermanas-manitas/hermanas-manitas.component';
import { MuseoComponent } from './menu-vertical/localizaciones/en-la-isla/museo/museo.component';
import { OficinaGestionComponent } from './menu-vertical/localizaciones/en-la-isla/oficina-gestion/oficina-gestion.component';

// LOCALIZACIONES: FUERA DE LA ISLA
import { CayoFaunoComponent } from './menu-vertical/localizaciones/fuera-isla/cayo-fauno/cayo-fauno.component';
import { HhpComponent } from './menu-vertical/localizaciones/fuera-isla/hhp/hhp.component';

// COLECCIONES
import { FosilesComponent } from './menu-vertical/colecciones/fosiles/fosiles.component';
import { ArteComponent } from './menu-vertical/colecciones/arte/arte.component';
import { BichosComponent } from './menu-vertical/colecciones/bichos/bichos.component';
import { PecesComponent } from './menu-vertical/colecciones/peces/peces.component';
import { CriaturasMarinasComponent } from './menu-vertical/colecciones/criaturas-marinas/criaturas-marinas.component';
import { IndexComponent } from './index/index.component';

// ANIMAL COMPONENT
import { AnimalComponent } from './features/animal/animal.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'index', component: IndexComponent},
  { path: 'foro', component: AnimalComponent },
  { path: 'menu-vertical/objetos/herramientas', component: HerramientasComponent },
  { path: 'menu-vertical/objetos/ropa', component: RopaComponent },
  { path: 'menu-vertical/objetos/muebles', component: MueblesComponent },
  { path: 'menu-vertical/personajes/el-aldeano', component: ElAldeanoComponent },
  { path: 'menu-vertical/personajes/personajes-principales', component: PersonajesPrincipalesComponent },
  { path: 'menu-vertical/personajes/vecinos', component: VecinosComponent },
  { path: 'menu-vertical/localizaciones/en-la-isla/casa', component: CasaComponent },
  { path: 'menu-vertical/localizaciones/en-la-isla/aerodromo', component: AerodromoComponent },
  { path: 'menu-vertical/localizaciones/en-la-isla/mininook', component: MininookComponent },
  { path: 'menu-vertical/localizaciones/en-la-isla/hermanas-manitas', component: HermanasManitasComponent },
  { path: 'menu-vertical/localizaciones/en-la-isla/museo', component: MuseoComponent },
  { path: 'menu-vertical/localizaciones/en-la-isla/oficina-gestion', component: OficinaGestionComponent },
  { path: 'menu-vertical/localizaciones/fuera-isla/cayo-fauno', component: CayoFaunoComponent },
  { path: 'menu-vertical/localizaciones/fuera-isla/hhp', component: HhpComponent },
  { path: 'menu-vertical/colecciones/fosiles', component: FosilesComponent },
  { path: 'menu-vertical/colecciones/arte', component: ArteComponent },
  { path: 'menu-vertical/colecciones/bichos', component: BichosComponent },
  { path: 'menu-vertical/colecciones/peces', component: PecesComponent },
  { path: 'menu-vertical/colecciones/criaturas-marinas', component: CriaturasMarinasComponent },
  {
    path: '',
    loadChildren: () =>
      import('./features/animal/animal.module').then((m) => m.AnimalModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
