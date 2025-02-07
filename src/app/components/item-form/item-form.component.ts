import { Component, Inject, inject} from '@angular/core';
import { MatFormField, MatSuffix } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatButton, MatIconButton } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ItemsService } from '../../services/items.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-item-form',
  imports: [
    MatFormField,
    MatInput,
    MatIcon,
    MatIconButton,
    MatSuffix,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    MatButton
  ],
  providers:[ItemsService],
  templateUrl: './item-form.component.html',
  styleUrl: './item-form.component.scss'
})
export class ItemFormComponent {
  private itemsService: ItemsService = inject(ItemsService);
  itemForm: FormGroup;
  value = '';
  constructor(private fb: FormBuilder,
              @Inject('CLOSE_OVERLAY') private closeOverlay: () => void) {

    this.itemForm = this.fb.group({
      value: ['', [Validators.required, Validators.minLength(3)]]
    });
  }
  submit() {
    if (this.itemForm.valid) {
      this.itemsService.createItem({ name: this.itemForm.value.value }).subscribe({
        next: (response) => {
          console.log('Item ajouté avec succès', response);
          this.itemForm.reset();
          this.closeOverlay();
        },
        error: (err) => {
          console.error('Erreur lors de l’ajout', err);
        }
      });
    } else {
      console.log('Formulaire invalide');
    }
  }

  clear(){
    this.itemForm.reset();
  }
}
