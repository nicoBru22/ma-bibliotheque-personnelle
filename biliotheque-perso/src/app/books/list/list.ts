import { Component, inject, signal } from '@angular/core';
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

  readonly bookList = toSignal(this.#booksService.getBookList(), {
    initialValue: []
  })

}
