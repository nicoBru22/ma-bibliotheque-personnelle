import { BooksService } from "./books.service";
import { Observable } from "rxjs";
import { Book } from "./booksModel";
import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root' // Cela permet à Angular de trouver le service partout dans l'app
})
export class BooksJsonServerService implements BooksService {
    private readonly http = inject(HttpClient);
    private readonly BOOK_API_URL = "http://localhost:3000/books";

    getBookList(): Observable<Book[]> {
        return this.http.get<Book[]>(this.BOOK_API_URL);
        
    }

    addNewBook(newBook: Book): Observable<Book> {
        return this.http.post<Book>(this.BOOK_API_URL, newBook);
    }

    getBookById(id: string): Observable<Book> {
        return this.http.get<Book>(`${this.BOOK_API_URL}/${id}`);
    }

    deleteBookById(id: string): Observable<void> {
        return this.http.delete<void>(`${this.BOOK_API_URL}/${id}`);
    }

    updateBook(id: string, bookUpdated: Book): Observable<Book> {
        return this.http.put<Book>(`${this.BOOK_API_URL}/${id}`, bookUpdated);
        
    }
}