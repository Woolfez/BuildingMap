import {Component, Output, EventEmitter, Input, OnInit} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {AsyncPipe} from '@angular/common';
import {MatAutocompleteModule, MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

import {Rooms} from './rooms';
import { Cords } from '../../lib/Cords';

export interface Room {
  number: string;
  id: string;
  coordinates?: Cords;
}

/**
 * @title Display value autocomplete
 */
@Component({
  selector: 'app-searchbar',
  templateUrl: 'searchbar.component.html',
  styleUrl: 'searchbar.component.css',
  standalone: true,
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    AsyncPipe,
  ],
})
export class SearchbarComponent implements OnInit {
  @Input()
  label: string = '';

  myControl = new FormControl<string | Room>('');
  options: Room[] = Rooms;
  filteredOptions!: Observable<Room[]>;

  @Output() roomSelectEvent = new EventEmitter<{ id: string, coordinates: Cords}>();

  roomSelected(event: MatAutocompleteSelectedEvent) {
    this.roomSelectEvent.emit(event.option.value.id);
  }

  roomSelectedCordsRoom(room: Room) {
    if (room.coordinates !== undefined){
    this.roomSelectEvent.emit({id: room.id, coordinates: room.coordinates});
    console.log(room.coordinates)
    } else {
      console.error('Coordinates are not defined')
    }
  }
    
    
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const number = typeof value === 'string' ? value : value?.number;
        return number ? this._filter(number as string) : this.options.slice();
      }),
    );
  }

  displayFn(room: Room): string {
    return room && room.number ? room.number : '';
  }

  private _filter(number: string): Room[] {
    const filterValue = number.toLowerCase();

    return this.options.filter(option => option.number.toLowerCase().includes(filterValue));
  }
}