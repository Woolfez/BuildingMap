import { Component } from '@angular/core';
import { MappaneComponent } from '../app/mappane/mappane.component';
import { SidebarComponent } from '../app/sidebar/sidebar.component';
import { Cords } from '../lib/Cords';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ MappaneComponent, SidebarComponent ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
  setCords(coordinates: Cords){

  }
}
