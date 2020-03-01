import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from '../services/firebase-auth/firebase-auth.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  usuario: string

  constructor(public auth: FirebaseAuthService) { }

  ngOnInit(): void {
    this.auth.auth.authState.subscribe(user => {
      this.usuario = user.email
    })
  }

}
