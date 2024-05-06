import { Component, Output, EventEmitter } from '@angular/core';
import { SearchbarComponent } from '../searchbar/searchbar.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [SearchbarComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  
  roomSelectedFirst(firstRoom: any) {
    console.log(firstRoom)
  }
  roomSelectedSecond(secondRoom: any) {
    console.log(secondRoom)
  }

  
}
