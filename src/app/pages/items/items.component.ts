import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-items',
  imports: [HeaderComponent],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss',
  standalone: true,
})
export class ItemsComponent {

}
