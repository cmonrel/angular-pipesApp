import { Component, EventEmitter, Output } from '@angular/core';
import { Hero } from '../../../products/interfaces/hero.interface';

@Component({
  selector: 'shared-toolbar',
  templateUrl: './toolbar.component.html',
  styles: ``
})
export class ToolbarComponent {

  @Output()
  public onToggle = new EventEmitter<boolean>();

  @Output()
  public sortBy = new EventEmitter<keyof Hero>();

  public onToggleClick(): void {
    this.onToggle.emit();
  }

  public onSortClick(value: keyof Hero): void {
    this.sortBy.emit(value);
  }

}
