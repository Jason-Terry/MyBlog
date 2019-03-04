import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormControl, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})

export class EditorComponent implements OnInit {
  isReadOnly = false
  isRequired = false
  form: FormGroup

  placeholder = "What's on your mind?"

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
