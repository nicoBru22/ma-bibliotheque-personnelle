import { Observable } from "rxjs";
import { Book } from "./booksModel";


export abstract class BooksService { // abstraction qui necessite d'etre implémentée par une autre class
    abstract getBookList(): Observable<Book[]>; // observable signifie qu on attend quelque chose. Ici, un tableau de Book
    abstract addNewBook(newBook: Book): Observable<Book>;
    abstract getBookById(id: string): Observable<Book>;
    abstract deleteBookById(id: string): Observable<void>;
    abstract updateBook(id: string, bookUpdated: Book): Observable<Book>;
}