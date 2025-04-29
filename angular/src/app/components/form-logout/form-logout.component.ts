import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../../shared/usuario.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-form-logout',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './form-logout.component.html',
  styleUrl: './form-logout.component.css'
})
export class FormLogoutComponent {

  public user: User;

  constructor(public usuarioService: UsuarioService, private router: Router, private toastr: ToastrService) {
    this.user = new User(null, '', '', '', '', '');
  }

  public logout() {
    this.usuarioService.logout();
    this.toastr.success('Cierre de sesion', 'EXITO', {
      toastClass: 'ngx-toastr toast-validacion'
    });
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}


