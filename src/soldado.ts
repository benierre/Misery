export class soldado {

    private vida: number;

    constructor() {
        this.vida = 1;
    }

    recibirDisparo(): void {
        this.vida--;
    }

    estaVivo(): boolean {
        return this.vida > 0;
    }
}