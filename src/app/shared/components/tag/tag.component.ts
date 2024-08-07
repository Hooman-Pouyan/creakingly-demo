import { Component, input, InputSignal } from '@angular/core';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { DragdropDirective } from '../../directives/dragdrop.directive';
import { BaseJamElementComponent } from '../../../pages/brainstorming/jamboard/components/base-jam-element/base-jam-element.component';

@Component({
  selector: 'app-tag',
  standalone: true,
  imports: [NzTagModule, DragdropDirective],
  templateUrl: './tag.component.html',
  styleUrl: './tag.component.scss',
})
export class TagComponent {
  color: InputSignal<string> = input.required();

  position() {}
}
