import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from '../services/firebase-auth/firebase-auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: FirebaseAuthService, public router: Router) { }

  ngOnInit(): void { }

  login(form: NgForm): void {
    this.auth.accesoEmailContrasena(form.value.email, form.value.contrasena).then(data => {
      this.router.navigate(['privado'])
    })
  }
}
