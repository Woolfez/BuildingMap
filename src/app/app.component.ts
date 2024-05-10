import { Component, ViewChild, ElementRef } from '@angular/core';
import { MappaneComponent } from '../app/mappane/mappane.component';
import { SidebarComponent } from '../app/sidebar/sidebar.component';
import { Cords } from '../lib/Cords';
import { Context } from './Context';
import { Rooms } from './searchbar/rooms';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ MappaneComponent, SidebarComponent, MatButtonModule ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'default';
  context = new Context();


  clickButtonMethod(){
    const svg: (SVGSVGElement | null) = <SVGSVGElement><unknown> document.querySelector("svg");
    if (svg != null){
      console.log(svg.viewBox);
    }
  }

  setCords(coordinates: Cords){
    if (this.context.firstFieldOpen === true) {
      this.context.cordsFirstField = coordinates;
      console.log(this.context.firstFieldOpen)

    } else if (this.context.secondFieldOpen === true){
      this.context.cordsSecondField = coordinates;
    }
  }
  roomSelected(event: { id: string, coordinates: Cords }) {
    if (this.context.firstFieldOpen) {
      this.context.cordsFirstField = event.coordinates;
    } else if (this.context.secondFieldOpen) {
      this.context.cordsSecondField = event.coordinates;
    }
  }

  secondHandleClick(secondEvent: MouseEvent){
    this.context.firstFieldOpen = false;
    this.context.secondFieldOpen = true;
    console.log(this.context.firstFieldOpen, this.context.secondFieldOpen)
  }
  firstHandleClick(firstEvent: MouseEvent){
    this.context.firstFieldOpen = true;
    this.context.secondFieldOpen = false;
    console.log(this.context.firstFieldOpen, this.context.secondFieldOpen)
  }
}

