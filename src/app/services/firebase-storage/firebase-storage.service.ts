import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import 'firebase/storage'

@Injectable({
  providedIn: 'root'
})
export class FirebaseStorageService {

  constructor(private storageService: AngularFireStorage) { }

  subirArchivo(ruta: string, archivo: any) {
    return this.storageService.upload(ruta, archivo);
  }

  referenciaArchivo(archivo: string) {
    return this.storageService.storage.ref(archivo);
  }
}
