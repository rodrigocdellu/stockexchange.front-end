import { Component } from '@angular/core';
import { Country } from '../../models/country.model';
import { CountryService } from '../../services/country.service';

@Component({
    selector: 'app-country-detail',
    templateUrl: './country-detail.component.html',
    styleUrls: ['./country-detail.component.css'],
    standalone: false // 2025/04/21 - By default it is not generated via Angular CLI. You must declare it to fix.
})
export class CountryDetailComponent {
    id: number = 0;
    countryResult: Country[] = [];

    constructor(private countryService: CountryService) { }

    fetchCountry() {
        this.countryService.getCountryById(this.id).subscribe(data => {
            this.countryResult = data;
        });
    }
}
