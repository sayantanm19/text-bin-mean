import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

// import { PasteDetails } from 'src/app/shared/paste-details.model';
// import { PasteDetailsService } from 'src/app/shared/paste-details.service';

@Component({
  selector: 'app-showpaste',
  templateUrl: './showpaste.component.html',
  styleUrls: ['./showpaste.component.css'],
})
export class ShowpasteComponent implements OnInit {
  constructor(
    // public service: PasteDetailsService,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  base = 'http://localhost:5000/get/';
  currentPaste = {
    expireAt: null,
    idx: '',
    title: '',
    paste: '',
    createdAt: '',
  };

  ngOnInit(): void {
    this.http
      .get<any>(this.base + this.route.snapshot.paramMap.get('id')?.trim())
      .subscribe((data) => {
        this.currentPaste = Object.assign({}, data);
        console.log(this.currentPaste);
      });
  }
}
