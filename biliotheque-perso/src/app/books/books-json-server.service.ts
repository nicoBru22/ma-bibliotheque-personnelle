import { BooksService } from "./books.service";
import { map, Observable } from "rxjs";
import { Book } from "./booksModel";
import { inject, Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root' // Cela permet à Angular de trouver le service partout dans l'app
})
export class BooksJsonServerService implements BooksService {
    private readonly http = inject(HttpClient);
    private readonly BOOK_API_URL = environment.apiUrl;

    getBookList(): Observable<Book[]> {
        return this.http.get<any>(this.BOOK_API_URL).pipe(
            map(res => Array.isArray(res) ? res : res.books) 
        );
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