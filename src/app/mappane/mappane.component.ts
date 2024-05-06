import { Component, Output, EventEmitter } from '@angular/core';
import { Cords } from '../../lib/Cords';


@Component({
  selector: 'app-mappane',
  standalone: true,
  imports: [],
  templateUrl: './Floor1.svg',
  styleUrl: './mappane.component.css'
})
export class MappaneComponent {

  cords!: Cords;

  SetCordsRoom(evt: any) {
    this.cords = new Cords(evt.srcElement.attributes.x.value, evt.srcElement.attributes.y.value);
    this.setCords.emit(this.cords);


  }
  SetCordsOutRoom(evt: any) {
    this.cords = new Cords(evt.x, evt.y);
    this.setCords.emit(this.cords);
  }

  @Output() setCords = new EventEmitter<Cords>();

}