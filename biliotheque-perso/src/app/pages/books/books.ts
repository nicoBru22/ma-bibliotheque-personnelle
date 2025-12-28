import { Component } from '@angular/core';
import { List } from "../../books/list/list";

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [List],
  templateUrl: './books.html',
  styleUrl: './books.scss',
})
export class Books {

}
