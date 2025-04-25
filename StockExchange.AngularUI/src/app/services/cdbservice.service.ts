import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'; // 2025/04/24 - To handle errors

import { Retorno } from '../models/retorno.model';

@Injectable({
    providedIn: 'root'
})
export class CdbserviceService {
    // Sample URL"http://localhost:5041/CDB/SolicitarCalculoInvestimento/SolicitarCalculoInvestimento?investimento=1&meses=2"
    private baseURL = "http://localhost";
    private port = "5041" // change to 7200 to dockerize or 5041 to localhost
    private controller = "CDB";

    constructor(private http: HttpClient) {
    }

    solicitarCalculoInvestimento(investimento: number, meses: number): Observable<Retorno> {
        // Define the service action
        let action = "SolicitarCalculoInvestimento";

        // Set the service url
        let url = `${this.baseURL}:${this.port}/${this.controller}/${action}/${action}?investimento=${investimento}&meses=${meses}`;

        // Do the request
        return this.http.get<Retorno>(url).pipe(
            catchError((error: HttpErrorResponse) => {
                console.error("Erro na requisição:", error.message);
                console.error("Status:", error.status);
                console.error("Detalhes:", error.error); // Back-end may send messages here

                return throwError(() => new Error('Erro ao solicitarCalculoInvestimento'));
            })
        );
    }
}
