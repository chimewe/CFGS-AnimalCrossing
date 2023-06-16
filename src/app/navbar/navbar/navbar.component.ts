import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  title = 'AnimalCrossing-Wiki';

  itemsHorizontal: MenuItem[] = [];
  itemsVertical: MenuItem[] = [];

  ngOnInit() {

    this.itemsHorizontal = [

      {
          label: 'Objetos',
          icon: '',
          items: [
            {
                label: 'Herramientas',
                icon: '',
                routerLink: '/menu-vertical/objetos/herramientas'
            },
            {
                label: 'Ropa',
                icon: '',
                routerLink: '/menu-vertical/objetos/ropa'
            },
            {
                label: 'Muebles',
                icon: '',
                routerLink: '/menu-vertical/objetos/muebles'
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
                routerLink: '/menu-vertical/personajes/el-aldeano'
            },
            {
                label: 'Personajes principales',
                icon: '',
                routerLink: '/menu-vertical/personajes/personajes-principales'
            },
            {
                label: 'Vecinos',
                icon: '',
                routerLink: '/menu-vertical/personajes/vecinos'
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
                    routerLink: '/menu-vertical/localizaciones/en-la-isla/casa'
                },
                {
                    label: 'Aeródromo',
                    icon: '',
                    routerLink: '/menu-vertical/localizaciones/en-la-isla/aerodromo'
                },
                {
                    label: 'MiniNook',
                    icon: '',
                    routerLink: '/menu-vertical/localizaciones/en-la-isla/mininook'
                },
                {
                    label: 'Hermanas Manitas',
                    icon: '',
                    routerLink: '/menu-vertical/localizaciones/en-la-isla/hermanas-manitas'
                },
                {
                  label: 'Museo',
                  icon: '',
                  routerLink: '/menu-vertical/localizaciones/en-la-isla/museo'
                },
                {
                    label: 'Oficina Gestión Vecinal',
                    icon: '',
                    routerLink: '/menu-vertical/localizaciones/en-la-isla/oficina-gestion'
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
                    routerLink: '/menu-vertical/localizaciones/fuera-isla/cayo-fauno'
                },
                {
                    label: 'Happy Home Paradise (DLC)',
                    icon: '',
                    routerLink: '/menu-vertical/localizaciones/fuera-isla/hhp'
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
                routerLink: '/menu-vertical/colecciones/fosiles'
            },
            {
                label: 'Arte',
                icon: '',
                routerLink: '/menu-vertical/colecciones/arte'
            },
            {
                label: 'Bichos',
                icon: '',
                routerLink: '/menu-vertical/colecciones/bichos'
            },
            {
                label: 'Peces',
                icon: '',
                routerLink: '/menu-vertical/colecciones/peces'
            },
            {
                label: 'Criaturas marinas',
                icon: '',
                routerLink: '/menu-vertical/colecciones/criaturas-marinas'
            },

          ]
      },
      {
        label: 'Foro',
        icon: '',
        routerLink: '/foro'
      },
      {
        label: 'Log out',
        icon: '',
        routerLink: '/'
      },


    ];
}
}
