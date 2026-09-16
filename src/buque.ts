export class buque{

    private vida: number;

    constructor() {
        this.vida = 3;
    }

    recibirDisparo(): void {
        this.vida--;
    }

    estaVivo(): boolean {
        return this.vida > 0;
    }
    
    disparar(): void{
    }
}