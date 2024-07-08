// Enumeração Validators contendo os tipos de validadores disponíveis
export enum Validators {
    required = 'required',
    date = 'date',
}

// Interface Validator que define a estrutura de um validador, todos validares devem seguir
export interface Validator {
    validate: (x: any) => boolean; // Método que realiza a validação
    errorMessage?: string; // Mensagem de erro opcional
}

// Função que retorna um validador baseado no tipo fornecido
export function getValidator(validator: Validators): Validator {
    return validatorFactory(validator);
}

// Função de fábrica que cria instâncias de validadores baseados no tipo fornecido
export function validatorFactory(validator: string): Validator {
    switch (validator) {
        case Validators.required:
            return new RequiredValidator();
        case Validators.date:
            return new DateValidator();
        default:
            return defaultValidator;
    }
}

// Classe que implementa o validador de campo obrigatório
export class RequiredValidator implements Validator {
    errorMessage = 'Campo obrigatório';

    validate(value: any): boolean {
        debugger;
        if (value === null || value === undefined || value === '') {
            return false;
        }

        return true;
    }
}

// Classe que implementa o validador de data
export class DateValidator implements Validator {
    errorMessage = 'Data inválida';

    validate(value: string): boolean {
        debugger;
        value = value || '';
        return value.length === 10 && new Date(value) instanceof Date && !isNaN(new Date(value).getTime());
    }
}

export const defaultValidator: Validator = {
    validate: (_x: any) => true
};
