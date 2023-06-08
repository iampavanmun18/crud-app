import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  postEmplyoee(data: any) {
    return this.http.post('http://localhost:3000/posts', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  getEmplyoee() {
    return this.http.get('http://localhost:3000/posts').pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  updateEmplyoee(data: any, id: number) {
    return this.http.put<any>('http://localhost:3000/posts/' + id, data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }

  deleteEmplyoee(id: any) {
    return this.http.delete<any>('http://localhost:3000/posts/' + id).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
}
