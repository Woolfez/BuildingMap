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

  @Output() firstPointClicked = new EventEmitter<MouseEvent>();
  public firstOutput = new EventEmitter<MouseEvent>();
  
  public firstHandleClick(firstEvent: MouseEvent){
    this.firstOutput.emit(firstEvent)
    console.log(this.firstHandleClick)
  }

  @Output() secondPointClicked = new EventEmitter<MouseEvent>();
  public secondOutput = new EventEmitter<MouseEvent>();
  
  public secondHandleClick(secondEvent: MouseEvent){
    this.secondOutput.emit(secondEvent)
    console.log(this.secondHandleClick)
  }
  
}
