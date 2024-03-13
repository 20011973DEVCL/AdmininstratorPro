import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../service/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit {

  menuItems:any[]=[];

  constructor(private sideBarService:SidebarService) {}

  ngOnInit(): void {
    this.menuItems  = this.sideBarService.menu;
    console.log(this.menuItems.length);
  }


}
