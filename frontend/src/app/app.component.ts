import { Component } from '@angular/core';
import { Http, RequestOptions } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  spaceships: Array<object>;

  newSpaceship: object = {
    id: '',
    consumables: '',
    denomination: '',
    cargo_capacity: '',
    passengers: '',
    max_atmosphering_speed: '',
    crew: '',
    lengthiness: '',
    model: '',
    cost_in_credits: '',
    manufacturer: '',
    image: '',
  };

  constructor(public http: Http) {
    this.getSpaceships();
  }


  getSpaceships() {
    this.http.get('http://localhost:8080/')
      .subscribe(
        (data) => this.spaceships = JSON.parse(data['_body']),
        err => { console.error('Valami nem jó!'); }
      );
  }

  create(newSpaceship) {
    this.http.post('http://localhost:8080/', newSpaceship)
      .subscribe(
        () => {
          this.getSpaceships();
        }
      );
  }

  update(spaceship) {
    this.http.put(`http://localhost:8080/${spaceship['_id']}`, spaceship)
      .subscribe(
        () => {
          this.getSpaceships();
        }
      );
  }

  remove(spaceship) {
    this.http.delete(`http://localhost:8080/${spaceship._id}`)
      .subscribe(
        () => {
          this.getSpaceships();
        }
      );
  }
}
