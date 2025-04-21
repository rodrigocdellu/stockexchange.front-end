import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../models/country.model';

@Component({
    selector: 'app-country-list',
    templateUrl: './country-list.component.html',
    styleUrls: ['./country-list.component.css'],
    standalone: false // 2025/04/21 - By default it is not generated via Angular CLI. You must declare it to fix.
})
export class CountryListComponent implements OnInit {
    countries: Country[] = [];

    constructor(private countryService: CountryService) { }

    ngOnInit(): void {
        this.countryService.getAllCountries().subscribe(data => {
            this.countries = data;
        });
    }
}
