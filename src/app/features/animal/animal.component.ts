import { Component, OnInit } from '@angular/core';
import { Observable, filter, tap } from 'rxjs';

import { MatDialog } from '@angular/material/dialog';
import { AnimalCrossingFirestoreService } from 'app/core/animal-crossing-firestore.service';
import { Animal } from './interfaces/animal.interface';
import { FormComponent } from './components/form/form.component';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent {
  allAnimal$: Observable<Animal[]>;
  selectedAnimal?: Animal;

  constructor(
    private readonly animalService: AnimalCrossingFirestoreService,
    private readonly dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.allAnimal$ = this.animalService.getAll();
  }

  addAnimal() {
    const dialogRef = this.dialog.open(FormComponent, {
      data: {},
      width: '40%',
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter(Boolean),
        tap((animal) => this.animalService.create(animal))
      )
      .subscribe();
  }

  updateAnimal() {
    const dialogRef = this.dialog.open(FormComponent, {
      data: { ...this.selectedAnimal },
      width: '40%',
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter(Boolean),
        tap((animal) => this.animalService.update(animal)),
        tap((animal) => this.selectAnimal(animal))
      )
      .subscribe();
  }

  selectAnimal(animal: Animal) {
    this.selectedAnimal = animal;
  }

  deleteAnimal() {
    this.animalService.delete(this.selectedAnimal!.id);
    this.selectedAnimal = undefined;
  }


}
