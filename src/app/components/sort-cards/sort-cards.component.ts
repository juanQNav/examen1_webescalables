import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sort-cards',
  standalone: true,
  imports: [],
  templateUrl: './sort-cards.component.html',
  styleUrl: './sort-cards.component.css'
})
export class SortCardsComponent {
  @Output()
  public sortByAlphabetic : EventEmitter<void> = new EventEmitter();

  @Output()
  public reverseList : EventEmitter<void> = new EventEmitter();

  public onSortByAlphabetic(): void {
    this.sortByAlphabetic.emit();
  }

  public onReverseList(): void {
    this.reverseList.emit();
  }
}