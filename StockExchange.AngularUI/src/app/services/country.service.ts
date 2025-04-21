import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../models/country.model';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CountryService {
    private baseUrl = 'http://localhost:5041/Content';

    constructor(private http: HttpClient) { }

    getAllCountries(): Observable<Country[]> {
        return this.http.get<Country[]>(`${this.baseUrl}/GetAll`);
    }

    getCountryById(id: number): Observable<Country[]> {
        return this.http.get<Country[]>(`${this.baseUrl}/GetByID?id=${id}`);
    }
}
