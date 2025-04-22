import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Retorno } from '../models/retorno.model';

@Injectable({
    providedIn: 'root'
})
export class CdbserviceService {
    // Sample URL"http://localhost:5041/CDB/SolicitarCalculoInvestimento/SolicitarCalculoInvestimento?investimento=1&meses=2";
    private baseURL = "http://localhost";
    private port = "5041"
    private controller = "CDB";

    constructor(private http: HttpClient) {
    }

    solicitarCalculoInvestimento(investimento: number, meses: number): Observable<Retorno> {
        // Define the service action
        var action = "SolicitarCalculoInvestimento";

        // Set the service url
        var url = `${this.baseURL}:${this.port}/${this.controller}/${action}/${action}?investimento=${investimento}&meses=${meses}`

        return this.http.get<Retorno>(url);
    }
}
