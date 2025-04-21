import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table'; // 2025/04/21 - New module for Angular Material
import { MatCardModule } from '@angular/material/card'; // 2025/04/21 - New module for Angular Material
import { CountryListComponent } from './components/country-list/country-list.component';
import { CountryDetailComponent } from './components/country-detail/country-detail.component';

@NgModule({
    declarations: [
        AppComponent,
        CountryListComponent,
        CountryDetailComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        BrowserAnimationsModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule, // 2025/04/21 - New module for Angular Material
        MatCardModule // 2025/04/21 - New module for Angular Material
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
