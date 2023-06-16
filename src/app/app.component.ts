import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { SharedService } from './services/shared.service';
import { url } from 'inspector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private sharedService: SharedService) {}


  title = 'AnimalCrossing-Wiki';

  itemsHorizontal: MenuItem[] = [];
  itemsVertical: MenuItem[] = [];

  logueado: boolean = false;

    ngOnInit() {

        this.itemsHorizontal = [
            {
                label: 'Log in',
                icon: '',
                routerLink: '/'
            }
        ];

        this.itemsVertical = [
          {
              label: 'Objetos',
              icon: '',
              items: [
                {
                    label: 'Herramientas',
                    icon: '',
                    routerLink: 'menu-vertical/objetos/herramientas'
                },
                {
                    label: 'Ropa',
                    icon: '',
                    routerLink: 'menu-vertical/objetos/ropa'
                },
                {
                    label: 'Muebles',
                    icon: '',
                    routerLink: 'menu-vertical/objetos/muebles'
                }
              ]
          },
          {
              label: 'Personajes',
              icon: '',
              items: [
                {
                    label: 'El aldeano',
                    icon: '',
                    routerLink: 'menu-vertical/personajes/el-aldeano'
                },
                {
                    label: 'Personajes principales',
                    icon: '',
                    routerLink: 'menu-vertical/personajes/personajes-principales'
                },
                {
                    label: 'Vecinos',
                    icon: '',
                    routerLink: 'menu-vertical/personajes/vecinos'
                }
              ]
          },
          {
              label: 'Localizaciones',
              icon: '',
              items: [
                {
                  label: 'En la isla',
                  icon: '',
                  items: [
                    {
                        label: 'Tu casa',
                        icon: '',
                        routerLink: 'menu-vertical/localizaciones/en-la-isla/casa'
                    },
                    {
                        label: 'Aeródromo',
                        icon: '',
                        routerLink: 'menu-vertical/localizaciones/en-la-isla/aerodromo'
                    },
                    {
                        label: 'MiniNook',
                        icon: '',
                        routerLink: 'menu-vertical/localizaciones/en-la-isla/mininook'
                    },
                    {
                        label: 'Hermanas Manitas',
                        icon: '',
                        routerLink: 'menu-vertical/localizaciones/en-la-isla/hermanas-manitas'
                    },
                    {
                      label: 'Museo',
                      icon: '',
                      routerLink: 'menu-vertical/localizaciones/en-la-isla/museo'
                    },
                    {
                        label: 'Oficina Gestión Vecinal',
                        icon: '',
                        routerLink: 'menu-vertical/localizaciones/en-la-isla/oficina-gestion'
                    }
                  ]
                },
                {
                  label: 'Fuera de la isla',
                  icon: '',
                  items: [
                    {
                        label: 'Cayo Fauno',
                        icon: '',
                        routerLink: 'menu-vertical/localizaciones/fuera-isla/cayo-fauno'
                    },
                    {
                        label: 'Happy Home Paradise (DLC)',
                        icon: '',
                        routerLink: 'menu-vertical/localizaciones/fuera-isla/hhp'
                    }
                  ]
                }
              ]
          },
          {
              label: 'Colecciones',
              icon: '',
              items: [
                {
                    label: 'Fósiles',
                    icon: '',
                    routerLink: 'menu-vertical/colecciones/fosiles'
                },
                {
                    label: 'Arte',
                    icon: '',
                    routerLink: 'menu-vertical/colecciones/arte'
                },
                {
                    label: 'Bichos',
                    icon: '',
                    routerLink: 'menu-vertical/colecciones/bichos'
                },
                {
                    label: 'Peces',
                    icon: '',
                    routerLink: 'menu-vertical/colecciones/peces'
                },
                {
                    label: 'Criaturas marinas',
                    icon: '',
                    routerLink: 'menu-vertical/colecciones/criaturas-marinas'
                }
              ]
          }
        ];
    }
}
