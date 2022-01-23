import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-router-medic',
  templateUrl: './router-medic.component.html',
  styleUrls: ['./router-medic.component.css'],
})
export class RouterMedicComponent implements OnInit {
  id: string | undefined; // From Angular 5, it's necessary to initialize

  constructor(public router: Router, public activatedRoute: ActivatedRoute) {}
  // Router. Element to navigate
  // ActivatedRoute. Element to: A) Get the params, B) Suscribe to the params

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.id = params['id']; // Suscribe and update id, each time a new param 'id' is received
    });
  }

  guardarMedico() {
    this.router.navigate(['medico', '123']);
  }
}
