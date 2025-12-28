import { Component, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';
import { Book, BOOK_RULES } from '../booksModel';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add.html',
  styleUrl: './add.scss',
})
export class Add {
  readonly router = inject(Router);
  readonly bookService = inject(BooksService);
  readonly BOOK_RULES = signal(BOOK_RULES).asReadonly();
  readonly form = new FormGroup({
    titre: new FormControl('', [
      Validators.required,
      Validators.maxLength(BOOK_RULES.MAX_TITRE),
      Validators.minLength(BOOK_RULES.MIN_TITRE),
      Validators.pattern(BOOK_RULES.PATTERN)
    ]),
    auteur: new FormControl('', [
      Validators.required,
      Validators.maxLength(BOOK_RULES.MAX_AUTEUR),
      Validators.minLength(BOOK_RULES.MIN_AUTEUR),
      Validators.pattern(BOOK_RULES.PATTERN)     
    ]),
    edition: new FormControl('', [
      Validators.required,
      Validators.maxLength(BOOK_RULES.MAX_EDITION),
      Validators.minLength(BOOK_RULES.MIN_EDITION)
    ]),
    anneeEdition: new FormControl('', [
      Validators.required,
      Validators.min(BOOK_RULES.MIN_ANNEE),
      Validators.max(BOOK_RULES.MAX_ANNEE)
    ]),

  });

  onSubmit() {
    Object.values(this.form.controls).forEach(control => control.markAsDirty())
  
    if(this.form.invalid) {
      return;
    }

    const newBook: Omit<Book, 'id'> = {
      titre: this.bookTitre.value,
      auteur: this.bookAuteur.value,
      edition: this.bookEdition.value,
      anneeEdition: this.bookAnneeEdition.value
    };

    this.bookService.addNewBook(newBook).subscribe((bookAdded) => {
      this.router.navigate(['/home']);
    })
  
  }

  get bookTitre() {
    return this.form.get('titre') as FormControl;
  }

  get bookAuteur() {
    return this.form.get('auteur') as FormControl;
  }

  get bookEdition() {
    return this.form.get('edition') as FormControl;
  }

  get bookAnneeEdition() {
    return this.form.get('anneeEdition') as FormControl;
  }


}
