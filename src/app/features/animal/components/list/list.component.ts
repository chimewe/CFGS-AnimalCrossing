import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from '../../interfaces/animal.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() animal$: Observable<Animal[]>;
  @Output() animalEmitter = new EventEmitter<Animal>();

  constructor() {}

  ngOnInit(): void {}

  selectAnimal(animal: Animal) {
    this.animalEmitter.emit(animal);
  }
}
