import { Component } from '@angular/core';
import { MatCard, MatCardContent, MatCardFooter, MatCardHeader, MatCardTitle } from '@angular/material/card';
import { MatChip, MatChipSet } from '@angular/material/chips';
import { MatActionList } from '@angular/material/list';
import { MatButton } from '@angular/material/button';


@Component({
  selector: 'app-item-card',
  imports: [
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
    MatButton
  ],
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss',
  standalone: true
})
export class ItemCardComponent {

}
