import { Component, ViewEncapsulation } from '@angular/core';
import { CdbserviceService } from '../../services/cdbservice.service';
import { Retorno } from '../../models/retorno.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-solicitacao',
    standalone: false,
    templateUrl: './solicitacao.component.html',
    styleUrl: './solicitacao.component.css',
    encapsulation: ViewEncapsulation.None // // 2025/04/22 - To view the component CSS
})
export class SolicitacaoComponent {
    solicitacaoForm: FormGroup;
    retorno: Retorno = {} as Retorno;
    validationMessage: string = "";

    constructor(private formBuilder: FormBuilder, private cdbserviceService: CdbserviceService) {
        this.solicitacaoForm = this.formBuilder.group({
            investimento: ['', [Validators.required, Validators.min(0.01)]], // Only values greater than 0.01
            meses: ['', [Validators.required, Validators.pattern('^[0-9]+$'), Validators.min(1)]] // Only positive integers greater than 0
        });
    }

    blockDecimal(event: KeyboardEvent): void {
        if (event.key === '.' || event.key === ',') {
            event.preventDefault();
        }
    }

    clearFields(): void {
        // Clear form fields
        this.solicitacaoForm.patchValue({
            investimento: '',
            meses: ''
        });

        // Clear retorno fields
        this.retorno = {} as Retorno;
    }

    onSubmit() {
        // For debug
        //console.log(this.solicitacaoForm.value);

        if (this.solicitacaoForm.valid) {
            const investimentoFormatado = this.solicitacaoForm.get('investimento')?.value;

            // If it is already a number (in the case of ngx-mask), use it directly:
            const investimento = typeof investimentoFormatado === 'number'
                ? investimentoFormatado
                : parseFloat(
                    investimentoFormatado
                        .replace('R$', '')
                        .replace(/\./g, '')
                        .replace(',', '.')
                        .trim()
                );

            // For Debug
            //console.log('Valor numérico:', valorNumerico);

            var meses = this.solicitacaoForm.value["meses"];

            this.cdbserviceService.solicitarCalculoInvestimento(investimento, meses).subscribe(retorno => {
                this.retorno = retorno;
            });
        }
    }
}
