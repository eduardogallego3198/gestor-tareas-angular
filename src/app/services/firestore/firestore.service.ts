import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore'

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  obtenerTareas() {
    return this.firestore.collection('lista-tareas').snapshotChanges();
  }

  agregarTarea(data: {nombre: string, archivo: any}) {
    return this.firestore.collection('lista-tareas').add(data);
  }
}
