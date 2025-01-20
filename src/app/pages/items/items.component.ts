import { Component } from '@angular/core';
import { ItemCardComponent } from '../../components/item-card/item-card.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-items',
  imports: [ItemCardComponent, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss',
  standalone: true,
})
export class ItemsComponent {
  value = '';
}
