import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore/firestore.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FirebaseStorageService } from '../services/firebase-storage/firebase-storage.service';

@Component({
  selector: 'app-privado',
  templateUrl: './privado.component.html',
  styleUrls: ['./privado.component.css']
})
export class PrivadoComponent implements OnInit {
  listaTareas: Array<Object> = []
  tareaForm = new FormGroup({ 
    nombre: new FormControl('', Validators.required)
  });
  eventoArchivo: any
  usuario: any
  nombreArchivo: string = 'Elegir archivo...'
  
  constructor(private firestore: FirestoreService, private storage: 
    FirebaseStorageService) {
    this.tareaForm.setValue({nombre: '' });
  }
  
  ngOnInit(): void {
    this.firestore.obtenerTareas().subscribe((snapshot) => {
      snapshot.forEach((data: any) => {
        this.listaTareas.push(data.payload.doc.data());
      });
    });
  }
  
  getEventoArchivo(event: any) { 
    this.eventoArchivo = event; 
    this.nombreArchivo = this.eventoArchivo.target.files[0].name; 
  }
  
  nuevaTarea(nombre: any) {
    const archivo = this.eventoArchivo.target.files[0]
    
    this.storage.subirArchivo(archivo.name, archivo)
    this.storage.referenciaArchivo(archivo.name).getDownloadURL().then(
      url => { 
        this.firestore.agregarTarea({nombre: nombre.nombre, archivo: {nombre: archivo.name, url: url}})
      }
    )
    this.listaTareas = []
  }
}
