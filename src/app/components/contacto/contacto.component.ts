import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  title = 'localstorage';
  myform: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.myform = this.formBuilder.group({

      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),

    });
  }

  ngOnInit(): void { }

  onSubmit() {
    if (this.myform.valid) {
      localStorage.setItem('formdata', JSON.stringify(this.myform.value));
      this.router.navigate(['/pagina']);
    }
  }
}

