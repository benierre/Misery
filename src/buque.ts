export class buque{

    private vida: number;

    constructor() {
        this.vida = 3;
    }
        getVida(): number {
        return this.vida;
    }

    setVida(vida: number): void {
        this.vida = vida;
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