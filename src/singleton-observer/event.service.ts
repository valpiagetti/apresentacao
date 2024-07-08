import { BehaviorSubject, Observable } from 'rxjs';
import { skip } from 'rxjs/operators';

// Interface para representar um evento, contendo um dado qualquer
export interface Event {
    data: any;
}

export class EventService {
    // Propriedade estática para armazenar a única instância da classe
    private static instance: EventService;

    // Reactive Extensions Library for JavaScript
    // Subject do RxJS para armazenar e emitir eventos
    private $event: BehaviorSubject<Event>;

    // Método público e estático para obter a única instância da classe
    public static getInstance(): EventService {
        if (!EventService.instance) {
            EventService.instance = new EventService();
        }
        return EventService.instance;

    }

    // Construtor privado para impedir a criação de instâncias fora da classe
    private constructor() {
        this.$event = new BehaviorSubject<Event>({ data: {} });
    }

    // Método para despachar (emitir) um novo evento
    public dispatchEvent(event: Event) {
        // Emite o novo evento para todos os observadores
        this.$event.next(event);
    }

    // Método para observar os eventos emitidos
    public observeEvent(): Observable<Event> {
        return this.$event.asObservable().pipe(skip(1));
    }

    // Método para cancelar a inscrição nos eventos
    public unsubscribe() {
        this.$event.unsubscribe();
    }
}
