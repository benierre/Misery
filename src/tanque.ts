export class tanque{

   private vida: number;

   constructor() {
       this.vida = 2;
   }

    recibirDisparo(): void {
    this.vida--;
   }

   estaVivo(): boolean{
     return this.vida > 0
   }

   
    disparar(): void{
    }
}
