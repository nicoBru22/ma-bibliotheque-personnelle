import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { BooksService } from '../books.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-profil',
  imports: [RouterLink],
  templateUrl: './profil.html',
  styleUrl: './profil.scss',
})
export class Profil {
  readonly #route = inject(ActivatedRoute);
  readonly #router = inject(Router);
  readonly #bookService = inject(BooksService);

  readonly bookId = this.#route.snapshot.paramMap.get('id')!;

  readonly #bookResponse = toSignal(this.#bookService.getBookById(this.bookId).pipe(
    map((book) => ({value: book, error: undefined})),
    catchError((error) => of({value: undefined, error}))
  ));

  readonly error = computed(() => this.#bookResponse()?.error);
  readonly book = computed(() => this.#bookResponse()?.value);

  deleteBook() {
    if (confirm('Voulez-vous vraiment supprimer ce livre ?')) {
      this.#bookService.deleteBookById(this.bookId).subscribe(() => {
        this.#router.navigate(['/home']);
      })
    }
  }
}
