import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-anyday',
  templateUrl: './anyday.component.html',
  styleUrls: ['./anyday.component.css']
})
export class AnydayComponent implements OnInit {

  apiResponded = false;
  myDate: any;
  constructor() { }

  ngOnInit() {
  }

}
