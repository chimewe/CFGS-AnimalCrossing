
import { Injectable } from '@angular/core';
import { Firestore, collectionData, CollectionReference, DocumentData, collection, docData, addDoc, deleteDoc, doc, updateDoc} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Animal } from '../features/animal/interfaces/animal.interface'; // Don't forget to import the interface!!

@Injectable({
  providedIn: 'root'
})
export class AnimalCrossingFirestoreService {
  private animalCrossingCollection: CollectionReference<DocumentData>;

  constructor(private readonly firestore: Firestore) {
    this.animalCrossingCollection = collection(this.firestore, 'animal');
  }

  getAll() {
    return collectionData(this.animalCrossingCollection, {
      idField: 'id',
    }) as Observable<Animal[]>;
  }

  get(id: string) {
    const animalDocumentReference = doc(this.firestore, `animal/${id}`);
    return docData(animalDocumentReference, { idField: 'id' });
  }

  create(animal: Animal) {
    return addDoc(this.animalCrossingCollection, animal);
  }

  update(animal: Animal) {
    const animalDocumentReference = doc(
      this.firestore,
      `animal/${animal.id}`
    );
    return updateDoc(animalDocumentReference, { ...animal });
  }

  delete(id: string) {
    const animalDocumentReference = doc(this.firestore, `animal/${id}`);
    return deleteDoc(animalDocumentReference);
  }
}
