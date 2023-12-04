
import { Component , OnInit} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-agregar-equipos',
  templateUrl: './agregar-equipos.component.html',
  styleUrls: ['./agregar-equipos.component.css']
})
export class AgregarEquiposComponent {
  title = 'localstorage'
  myforde!:FormGroup;
  resultado!: string;
  
  constructor(private formBuilder: FormBuilder, 
    private router: Router, 
    private userService: UserService) {

    this.myforde = this.formBuilder.group({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    serial: new FormControl('', [Validators.required]),
    descripcion: new FormControl('', [Validators.required]),
    fabricante: new FormControl('', [Validators.required]),
    modelo: new FormControl('', [Validators.required]),
    fecha: new FormControl('', [Validators.required]),
  });
}

  ngOnInit():void{}

  onSubmit() {
    if (this.myforde.value) {
      localStorage.setItem('formdata', JSON.stringify(this.myforde.value));
      this.router.navigate(['/logueado']);
    } 
  }  

  }

