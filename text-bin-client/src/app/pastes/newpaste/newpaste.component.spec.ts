import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NewpasteComponent } from './newpaste.component';

import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';

describe('NewpasteComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        FormsModule
      ],
      declarations: [
        NewpasteComponent
      ],
    }).compileComponents();
  });

  it('should render text', () => {
    const fixture = TestBed.createComponent(NewpasteComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.new-paste-heading').textContent).toContain('Add a New Paste');
  });
});
