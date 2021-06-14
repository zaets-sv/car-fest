import { MenuItem } from '../spa/services/menu.service';
export const AppMenuItems: Array<MenuItem> = [
  {
    text: 'Cars',
    icon: 'assets/images/car.png',
    route: '/cars',
    submenu: []
  },
  {
    text: 'Maintenance',
    icon: 'assets/images/settings.png',
    route: '/settings',
    submenu: []
  },
  {
    text: 'Home',
    icon: 'assets/images/home.png',
    route: '/home',
    submenu: []
  },
]
