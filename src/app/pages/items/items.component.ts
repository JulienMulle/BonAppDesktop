import { Component, inject, Injector, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ItemCardComponent } from '../../components/item-card/item-card.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ItemsService } from '../../services/items.service';
import { Item } from '../../models/interface';
import { Observable } from 'rxjs';
import { ItemFormComponent } from '../../components/item-form/item-form.component';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-items',
  imports: [
    HttpClientModule,
    ItemCardComponent,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers:[ItemsService],
  templateUrl: './items.component.html',
  styleUrl: './items.component.scss',
  standalone: true,
})
export class ItemsComponent {
  private overlayRef: OverlayRef | undefined;
  private itemsData: ItemsService = inject(ItemsService);
  items: Observable<Item[]> = this.itemsData.getItems();
  value = '';

  constructor(private overlay: Overlay, private injector: Injector) {
    this.items.subscribe((data) => console.log(data));
  }


  openOverlay() {
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay.position()
        .global()
        .centerHorizontally()
        .top('20%'),
    });
    this.overlayRef.backdropClick().subscribe(() => this.closeOverlay());
    const injector = Injector.create({
      providers: [{ provide: 'CLOSE_OVERLAY', useValue: () => this.closeOverlay() }],
      parent: this.injector,
    });
    const portal = new ComponentPortal(ItemFormComponent, null, injector);
    this.overlayRef.attach(portal);
  }

  closeOverlay() {
    if (this.overlayRef) {
      this.overlayRef.dispose();
    }
  }


}
