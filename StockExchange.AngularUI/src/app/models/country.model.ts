import { Currency } from './currency.model';

export interface Country {
    name: string;
    capital: string;
    currencies: Currency[];
}
