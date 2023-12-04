import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-logueado',
  templateUrl: './logueado.component.html',
  styleUrls: ['./logueado.component.css']
})
export class LogueadoComponent {
  constructor(
    private userService: UserService,
    private router: Router,

  ) { }

  onClick() {
    this.userService.logout()
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => console.log(error));
  }
}

