import { describe, it, expect } from 'vitest';
import { buque } from "../src/Buque";

describe("buque", () =>{
 it ("El buque debe estar vivo", () => {
    const buque1 = new buque

    expect(buque1.estaVivo()).toBe(true);
  });
 it("El tanque debe morir de 3 disparos", () => {
   const buque1= new buque
   
   buque1.recibirDisparo();
   buque1.recibirDisparo();
   buque1.recibirDisparo();

    expect(buque1.estaVivo()).toBe(false);
 });
})