import { Component, computed, inject, signal } from '@angular/core';
import { BooksService } from '../books.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink, RouterModule } from "@angular/router";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './list.html',
  styleUrl: './list.scss',
})
export class List {

  readonly #booksService = inject(BooksService);
  readonly searchTerm = signal("");

  readonly bookList = toSignal(this.#booksService.getBookList(), {
    initialValue: []
  })

  readonly bookListFiltered = computed(() => {
    const searchTerm = this.searchTerm();
    const bookList = this.bookList();
    return bookList.filter(book =>
      book.titre.toLowerCase().includes(searchTerm.trim().toLowerCase()))
  })

  readonly numberOfBook = computed(() => this.bookList().length);


}
