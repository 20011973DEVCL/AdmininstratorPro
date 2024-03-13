import { Component } from '@angular/core';
import { SettingsService } from '../service/settings.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrl: './pages.component.css'
})
export class PagesComponent  {


  constructor(private settingsService: SettingsService) {}



  // href="./assets/css/colors/default-dark.css"

}
