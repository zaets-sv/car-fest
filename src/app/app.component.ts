import { Component } from '@angular/core';
import { SpaConfigService, SpaConfigSettings, Icons } from '../spa/services/spa-config.service';
import { MenuService } from '../spa/services/menu.service';
import { AppMenuItems } from './app.menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private spaConfigService: SpaConfigService, private menuService: MenuService) {
    const config: SpaConfigSettings = {
      socialIcons: [
        { imageFile: 'https://img.icons8.com/ios/100/ffffff/facebook--v1.png', alt: 'Facebook', url: 'http://facebook.com' },
        { imageFile: 'https://img.icons8.com/ios/100/ffffff/instagram-new--v1.png', alt: 'Instargram', url: 'http://www.instagram.com' },
        { imageFile: 'https://img.icons8.com/ios/100/ffffff/twitter--v1.png', alt: 'Twitter', url: 'http://twitter.com' },
        { imageFile: 'https://img.icons8.com/ios/50/ffffff/whatsapp--v1.png', alt: 'WhatsApp', url: 'http://www.whatsapp.com' },
      ],
      showUserControls: true
    };
    spaConfigService.configure(config);
    menuService.items = AppMenuItems;
  }
}

