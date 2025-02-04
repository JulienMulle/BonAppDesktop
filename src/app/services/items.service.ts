import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Item } from '../models/interface';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private baseUrl: string = 'http://localhost:5000';

  constructor(private http: HttpClient) {
  }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(`${this.baseUrl}/items`);
  }

  createItem(items:{ name: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/item`, items);
  }

  updateData(items: Item): Observable<any> {
    return this.http.put(`${this.baseUrl}/${items}`, items);
  }


  deleteData(items: Item): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${items}`);
  }
}
