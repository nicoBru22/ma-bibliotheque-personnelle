import { Component } from '@angular/core';
import { Add } from '../../books/add/add';

@Component({
  selector: 'app-add-book',
  standalone: true,
  imports: [Add],
  templateUrl: './add-book.html',
  styleUrl: './add-book.scss',
})
export class AddBook {

}
