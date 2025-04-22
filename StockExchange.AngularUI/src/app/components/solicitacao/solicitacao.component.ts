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
            investimento: ['', [Validators.required]], // ToDo: Add number valudators here
            meses: ['', [Validators.required]] // ToDo: Add number valudators here
        });
    }

    onSubmit() {
        // For debug
        //console.log(this.solicitacaoForm.value);

        if (this.solicitacaoForm.valid) {
            var investimento = this.solicitacaoForm.value["investimento"];
            var meses = this.solicitacaoForm.value["meses"];

            this.cdbserviceService.solicitarCalculoInvestimento(investimento, meses).subscribe(retorno => {
                this.retorno = retorno;
            });
        }
    }
}
