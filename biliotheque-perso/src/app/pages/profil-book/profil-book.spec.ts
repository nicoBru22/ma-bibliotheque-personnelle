import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilBook } from './profil-book';

describe('ProfilBook', () => {
  let component: ProfilBook;
  let fixture: ComponentFixture<ProfilBook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfilBook]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfilBook);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
