import { Component } from '@angular/core';
import { SpaConfigService, SpaConfigSettings, Icons } from '../spa/services/spa-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private spaConfigService: SpaConfigService) {
    const config: SpaConfigSettings = {
      socialIcons: [
        { imageFile: 'assets/images/facebook.png', alt: 'Facebook', url: 'http://facebook.com' },
        { imageFile: 'assets/images/instagram.png', alt: 'Instargram', url: 'http://www.instagram.com' },
        { imageFile: 'assets/images/twitter.png', alt: 'Twitter', url: 'http://twitter.com' },
        { imageFile: 'assets/images/whatsapp.png', alt: 'WhatsApp', url: 'http://www.whatsapp.com' },
      ],
      showUserControls: true
    };
    spaConfigService.configure(config);
  }

}
