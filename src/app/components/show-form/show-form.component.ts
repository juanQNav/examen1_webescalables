import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output()
  public createElement: EventEmitter<Show> = new EventEmitter();

  public onFormSubmit(form: NgForm): void{
    
    if(form.valid){    
      const newShow: Show = {
        description: form.value.description,
        episodes: 0,
        genre: "",
        image: form.value.image,
        likes: [],
        name: form.value.name,
        year: 0
      }
      //Emitir el evento al padre y pasarle el nuevo show a insertar
      this.createElement.emit(newShow);
      form.resetForm();
    }else{
      console.log("Falantan datos");
    }
  }

}
