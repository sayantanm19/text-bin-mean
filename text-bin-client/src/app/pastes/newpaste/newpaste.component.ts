import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PasteDetails } from 'src/app/shared/paste-details.model';
import { PasteDetailsService } from 'src/app/shared/paste-details.service';
import { ToastrService } from 'ngx-toastr';

import { Router } from '@angular/router';

@Component({
  selector: 'app-newpaste',
  templateUrl: './newpaste.component.html',
  styleUrls: ['./newpaste.component.css'],
})
export class NewpasteComponent implements OnInit {
  constructor(
    public service: PasteDetailsService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit(form: NgForm) {
      this.insertRecord(form);
      console.log('Inserting Paste');
  }

  insertRecord(form: NgForm) {

    this.service.postPasteDetails().subscribe(
      (res) => {
        
        this.service.refreshList();
        this.toastr.success('Added Successfully', 'Paste Details');
        this.router.navigate(['get', this.service.formData.idx]);

        this.resetForm(form);
      },
      (err) => {
        console.log(err);

        if (err.error === "pasteid-exists")
          this.toastr.error("The paste ID already exists", "Error in inserting")
      }
    );
  }

  resetForm(form: NgForm) {
    form.form.reset();
    this.service.formData = new PasteDetails();
  }
}
