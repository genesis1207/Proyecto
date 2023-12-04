import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  myfar!: FormGroup;
  resultado!: string;
  
  constructor(private formBuilder: FormBuilder, 
    private router: Router, 
    private userService: UserService) {

    this.myfar = this.formBuilder.group({

      username: new FormControl('', [Validators.required, Validators.minLength(5)]),
      lastname: new FormControl('', [Validators.required, Validators.minLength(5)]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{9}$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password2: new FormControl('', [Validators.required, Validators.minLength(6)]),
      password3: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.userService.register(this.myfar.value)
    .then(response => {
      console.log(response);
      this.router.navigate(['/login'])
    })
    .catch(error => console.log(error));
  }
}

