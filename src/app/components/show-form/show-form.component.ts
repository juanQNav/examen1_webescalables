import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Show } from '../../interfaces/show.interface';

@Component({
  selector: 'app-show-form',
  standalone: true,
  imports: [NgIf,NgFor, FormsModule],
  templateUrl: './show-form.component.html',
  styleUrl: './show-form.component.css'
})
export class ShowFormComponent {
  //show to edit
  @Input()
  public showToEdit: Show | null = null;

  //create element
  @Output()
  public createElement: EventEmitter<Show> = new EventEmitter();

  //update element
  @Output()
  public updateElement: EventEmitter<Show> = new EventEmitter();

  // Properties to handle form values
  public name: string = ''
  public description: string = ''
  public image: string = ''

  ngOnInit(): void {
    console.log('showToEdit:', this.showToEdit);
    if (this.showToEdit) {
      this.name = this.showToEdit.name;
      this.description = this.showToEdit.description;
      this.image = this.showToEdit.image;
    }
  }

  public onFormSubmit(form: NgForm): void {
    if (form.valid) {
      const newShow: Show = {
        description: this.description,
        episodes: 0,
        genre: "",
        image: this.image,
        likes: [],
        name: this.name,
        year: 0
      };

      if (this.showToEdit) {
        this.updateElement.emit(newShow);
      } else {
        this.createElement.emit(newShow);
      }

      form.resetForm();
    } else {
      console.log("Faltan datos");
    }
  }
}
