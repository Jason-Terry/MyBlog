import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  isReadOnly = false
  isRequired = false
  form: FormGroup

  placeholder = 'placeholder'

  constructor() {
  }

  ngOnInit() {
    
  }

  logChange($event: any) {
    // tslint:disable-next-line:no-console
    console.log($event)
  }

  logSelection($event: any) {
    // tslint:disable-next-line:no-console
    console.log($event)
  }

  toggleReadOnly() {
    this.isReadOnly = !this.isReadOnly
  }

  toggleRequired() {
    this.isRequired = !this.isRequired
}
}
