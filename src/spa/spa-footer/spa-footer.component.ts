import { Component, OnInit, Input } from '@angular/core';
import { SpaConfigService } from '../services/spa-config.service';
import { UserApi } from '../users/user-api';

@Component({
  selector: 'spa-footer',
  templateUrl: './spa-footer.component.html',
  styleUrls: ['./spa-footer.component.css']
})
export class SpaFooterComponent implements OnInit {
  title = ' All rights reserved';
  year = new Date().getFullYear();
  @Input() showFotterIcons: any;

  constructor(public spaConfigService: SpaConfigService, private userApi: UserApi) { }
  ngOnInit() {
  }

}
