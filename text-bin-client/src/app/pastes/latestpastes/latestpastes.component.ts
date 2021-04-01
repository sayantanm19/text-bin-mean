import { Component, OnInit } from '@angular/core';

import { PasteDetails } from 'src/app/shared/paste-details.model';
import { PasteDetailsService } from 'src/app/shared/paste-details.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-latestpastes',
  templateUrl: './latestpastes.component.html',
  styleUrls: ['./latestpastes.component.css']
})
export class LatestpastesComponent implements OnInit {

  constructor(public service: PasteDetailsService, private toastr:ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

}
