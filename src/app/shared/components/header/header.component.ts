import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  data: any = {}; //Datos de Usuario

  constructor(private authService: AuthService) {
  }

  /**
   * Se suscribe para notificación cuando cambie el token de usuario.
   */
  ngOnInit(): void {
    this.authService.getTokenData$().subscribe((data:any)=> {
      this.data = data;
    });
  }

  /**
   * Cerrar sesión
   */
  onLogout() {
    this.authService.logout();
    this.data = null;
  }

}
