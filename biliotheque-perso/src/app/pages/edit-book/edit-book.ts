import { Component } from '@angular/core';
import { Edit } from "../../books/edit/edit";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-edit-book',
  imports: [Edit, RouterModule],
  templateUrl: './edit-book.html',
  styleUrl: './edit-book.scss',
})
export class EditBook {

}
