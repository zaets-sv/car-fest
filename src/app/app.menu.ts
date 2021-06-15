import { MenuItem } from '../spa/services/menu.service';
export const AppMenuItems: Array<MenuItem> = [
  {
    text: 'Cars',
    icon: 'assets/images/car.png',
    route: "",
    submenu:
      [
        {
          text: 'Select',
          icon: 'assets/images/car.png',
          route: "",
          submenu: [
            {
              text: 'Ferrary',
              icon: 'assets/images/car.png',
              route: '/authenticated/car-detail/Ferrary',
              submenu: []
            },
            {
              text: 'Bugatti',
              icon: 'assets/images/car.png',
              route: '/authenticated/car-detail/Bugatti',
              submenu: []
            },
            {
              text: 'Lamborghini',
              icon: 'assets/images/car.png',
              route: '/authenticated/car-detail/Lamborghini',
              submenu: []
            },
            {
              text: 'Mazeratti',
              icon: 'assets/images/car.png',
              route: '/authenticated/car-detail/Mazeratti',
              submenu: []
            },
          ]
        },
        {
          text: 'Price top',
          icon: 'assets/images/car.png',
          route: '/authenticated/car-list/1',
          submenu: []
        },
        {
          text: 'Top 3',
          icon: 'assets/images/car.png',
          route: '/authenticated/car-list/3',
          submenu: []
        },
        {
          text: 'Top 5',
          icon: 'assets/images/car.png',
          route: '/authenticated/car-list/5',
          submenu: []
        }
      ]
  },
  {
    text: 'Maintenance',
    icon: 'assets/images/settings.png',
    route: "",
    submenu: [
      {
        text: 'Car maint',
        icon: 'assets/images/settings.png',
        route: '/authenticated/car-maint',
        submenu: []
      },
      {
        text: 'Settings',
        icon: 'assets/images/settings.png',
        route: '/authenticated/settings',
        submenu: []
      }
    ]
  },
  {
    text: 'Home',
    icon: 'assets/images/home.png',
    route: 'authenticated/home',
    submenu: []
  },
];
