import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })

export class FirebaseAuthService {
  
  constructor(public auth: AngularFireAuth, private router: Router) { 
    this.auth.authState.subscribe((auth) => {
      if (auth == null)
        this.router.navigate(['login'])
      else
        this.router.navigate(['privado'])
    })
  }

  accesoEmailContrasena(email: any, contrasena: any) {
    return this.auth.signInWithEmailAndPassword(email, contrasena)
  }

  cerrarSesion() {
    return this.auth.signOut()
  }
}
