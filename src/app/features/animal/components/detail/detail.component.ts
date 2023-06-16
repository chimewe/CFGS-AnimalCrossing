import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Animal } from '../../interfaces/animal.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input() animal: Animal;
  @Output() updateAnimal = new EventEmitter<void>();
  @Output() deleteAnimal = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  update() {
    this.updateAnimal.emit();
  }

  delete() {
    this.deleteAnimal.emit();
  }
}
