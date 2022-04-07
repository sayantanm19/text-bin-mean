import { Injectable } from '@angular/core';
import { PasteDetails } from './paste-details.model';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class PasteDetailsService {
  constructor(private http: HttpClient) { }

  formData: PasteDetails = new PasteDetails();

  // API URL
  readonly baseURL = 'http://localhost:5000';
  list: PasteDetails[] = [];

  refreshList() {
    this.http
      .get(this.baseURL + "/getall")
      .toPromise()
      .then((res) => (this.list = res as PasteDetails[]));
  }

  // getPaste() {
  //   this.http
  //     .get(this.baseURL + "/get" + PasteDetails.idx)
  //     .subscribe((data) => {
  //       return data;
  //     });
  // }

  postPasteDetails() {
    return this.http.post(this.baseURL + "/add", this.formData);
  }
}
