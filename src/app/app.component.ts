import { Component, ViewChild, ElementRef } from '@angular/core';
import { MappaneComponent } from '../app/mappane/mappane.component';
import { SidebarComponent } from '../app/sidebar/sidebar.component';
import { Cords } from '../lib/Cords';
import { Context } from './Context';
import { Rooms } from './searchbar/rooms';
import {MatButtonModule} from '@angular/material/button';
import { WaveAlgorithm } from '../lib/WaveAlgorithm';


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
<<<<<<< HEAD
      console.log(svg.viewBox);
    
    let rowsSize = Math.ceil(svg.viewBox.baseVal.height);
    let colonsSize = Math.ceil(svg.viewBox.baseVal.width);
    let algorithmVar = new WaveAlgorithm();
    algorithmVar.createBoard(colonsSize, rowsSize);
    let group = svg.getElementById('Stroke');
    //const group = document.getElementById("foo");
    for (const child of [...group.children]) {
      const line = <SVGGeometryElement><unknown> child;
      for (let i = 0; i < algorithmVar.board.length; i++) {
        for (let j = 0; j < algorithmVar.board[i].length; j++){
          const pointObj = new DOMPoint(i, j);
          const isPointInStroke = line.isPointInStroke(pointObj);
          if (isPointInStroke === true){
            algorithmVar.board[i][j] = "b";
          }
        }
      }
=======
      const width = Math.ceil(svg.viewBox.baseVal.width);
      const height = Math.ceil(svg.viewBox.baseVal.height);
      console.log(width, height);
>>>>>>> 2ac41afed1bf60a496e72a8bf355db3103fb6ba1
    }

    let start = this.context.cordsFirstField;
    let finish = this.context.cordsSecondField;
    if (start === null || finish === null){
      return;
    }
    algorithmVar.startingPoint = start;
    algorithmVar.endPoint = finish;
    algorithmVar.board[start.y][start.x] = 0;
    algorithmVar.board[finish.y][finish.x] = 'f';
    algorithmVar.calculate();
    console.log(algorithmVar.path);
  }
}

  setCords(coordinates: Cords){
    if (this.context.firstFieldOpen === true) {
      this.context.cordsFirstField = coordinates;

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

