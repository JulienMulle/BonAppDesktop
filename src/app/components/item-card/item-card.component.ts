import { Component, inject, Input } from '@angular/core';
import { MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatChip, MatChipSet } from '@angular/material/chips';
import { MatActionList } from '@angular/material/list';
import { MatButton } from '@angular/material/button';
import { Item } from '../../models/interface';
import { MatIcon } from '@angular/material/icon';
import { ItemsService } from '../../services/items.service';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-item-card',
  imports: [
    HttpClientModule,
    MatCardContent,
    MatCardTitle,
    MatCardHeader,
    MatCard,
    MatCardFooter,
    MatChipSet,
    MatChip,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardFooter,
    MatChipSet,
    MatChip,
    MatActionList,
    MatButton,
    MatIcon
  ],
  providers:[ItemsService],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss',
  standalone: true
})
export class ItemCardComponent {
  @Input() item!: Item;
  private itemsService: ItemsService = inject(ItemsService)
  constructor() {

  }

  deleteItem(){
    this.itemsService.deleteData(this.item.id).subscribe()
  }
}
