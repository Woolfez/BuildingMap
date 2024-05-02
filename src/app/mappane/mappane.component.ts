import { Component } from '@angular/core';

@Component({
  selector: 'app-mappane',
  standalone: true,
  imports: [],
  templateUrl: './Floor1.svg',
  styleUrl: './mappane.component.css'
})
export class MappaneComponent {

  LogCords(evt: any) {
    console.log(evt.x,evt.y);
  }
  LogCordsRooms(evt: any) {
    console.log(evt.x,evt.y);
    console.log(evt.srcElement.attributes.x.value,evt.srcElement.attributes.y.value)
  }
}