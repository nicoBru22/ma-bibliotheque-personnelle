import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../books.service';
import { Book, BOOK_RULES } from '../booksModel';
import { FormControl, FormGroup, Validators, ɵInternalFormsSharedModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-edit',
  imports: [ɵInternalFormsSharedModule, ReactiveFormsModule],
  templateUrl: './edit.html',
  styleUrl: './edit.scss',
})
export class Edit {

  readonly #route = inject(ActivatedRoute);
  readonly #router = inject(Router);
  readonly #bookService = inject(BooksService);
  readonly BOOK_RULES = signal(BOOK_RULES).asReadonly();

  readonly bookId = this.#route.snapshot.paramMap.get('id')!;

  readonly form = new FormGroup ({
    titre: new FormControl("", [
      Validators.required,
      Validators.minLength(BOOK_RULES.MIN_TITRE),
      Validators.maxLength(BOOK_RULES.MAX_TITRE),
      Validators.pattern(BOOK_RULES.PATTERN)
    ]),
    auteur: new FormControl("", [
      Validators.required,
      Validators.minLength(BOOK_RULES.MIN_AUTEUR),
      Validators.maxLength(BOOK_RULES.MAX_AUTEUR),
      Validators.pattern(BOOK_RULES.PATTERN)
    ]),
    edition: new FormControl("", [
      Validators.required,
      Validators.minLength(BOOK_RULES.MIN_EDITION),
      Validators.maxLength(BOOK_RULES.MAX_EDITION),
      Validators.pattern(BOOK_RULES.PATTERN)
    ]),
    anneeEdition: new FormControl<number | null>(null, [
      Validators.required,
      Validators.min(BOOK_RULES.MIN_ANNEE),
      Validators.max(BOOK_RULES.MAX_ANNEE)
    ])
  })

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

  onSubmit() {
    Object.values(this.form.controls).forEach(control => control.markAsDirty);
    if(this.form.invalid) {
      return;
    }
    const bookUpdated: Omit<Book,'id'> = {
      titre: this.bookTitre.value,
      auteur: this.bookAuteur.value,
      edition: this.bookEdition.value,
      anneeEdition: this.bookAnneeEdition.value
    };
    this.#bookService.updateBook(this.bookId, bookUpdated).subscribe((bookUpdated) => {
      this.#router.navigate(['/books'])
    })
  }

  ngOnInit(): void {
    this.initForm();
  }

private initForm(): void {
  if (this.bookId) {
    this.#bookService.getBookById(this.bookId).subscribe({
      next: (book) => {
        if (book) {
          this.form.patchValue(book);
        } else {
          this.#router.navigate(['/error']);
        }
      },
      error: (err) => {
        console.error("Erreur lors du chargement", err);
        this.#router.navigate(['/error']);
      }
    });
  }
}
}
