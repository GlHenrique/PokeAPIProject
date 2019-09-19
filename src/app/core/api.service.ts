import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private api: HttpClient) {
    }


    http(parametro): Observable<any> {
        return this.api.get<any[]>(`${API_URL}${parametro}`);
    }
}
