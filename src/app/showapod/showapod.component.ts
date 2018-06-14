import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { RequestService } from '../request.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-showapod',
  templateUrl: './showapod.component.html',
  styleUrls: ['./showapod.component.css']
})
export class ShowapodComponent implements OnInit, OnChanges {

  @Input() year: number;
  @Input() month: number;
  @Input() day: number;

  ngOnChanges(): void {
    console.log('ngOnChanges');
    if (this.year && this.month && this.day) {
      const url = this.service.baseURL + '&date=' + this.year + '-' + this.month + '-' + this.day;
      this.getApiInfo(url);
    } else {
      this.getApiInfo();
    }
  }
  constructor(public service: RequestService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    if (!this.service.apiResponded) {
      this.getApiInfo();
    }
  }

  getApiInfo(url?: string) {
    if (url) {
      console.log(url);
      this.service.getRequest(url).subscribe(
        data => this.processResult(data),
        error => this.processError(error),
        () => this.processFinal()
      );
    } else {
      console.log(this.service.baseURL);
      this.service.getRequest(this.service.baseURL).subscribe(
        data => this.processResult(data),
        error => this.processError(error),
        () => this.processFinal()
      );

    }
  }

  processResult(data: any) {
    console.log(data);
    this.service.result = data;
    this.service.apiResponded = true;
  }

  processError(error: any) {
  }

  processFinal() { }
}
