import { describe, it, expect } from 'vitest';
import { buque } from "../src/Buque";

describe("buque", () =>{
 it ("El buque debe estar vivo", () => {
    const buque1 = new buque

    expect(buque1.estaVivo()).toBe(true);
  });
 it("El buque debe morir de 3 disparos", () => {
   const buque1= new buque
   
   buque1.recibirDisparo();
   buque1.recibirDisparo();
   buque1.recibirDisparo();

    expect(buque1.estaVivo()).toBe(false);
 });
 it("La vida del buque debe actualizarse", () =>{
    const b1= new buque

    b1.recibirDisparo()

    expect(b1.getVida()).toBe (2)
 });
})