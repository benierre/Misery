import { describe, it, expect } from 'vitest';
import { tanque } from "../src/Tanque";

describe("tanque", () =>{
 it ("El tanque debe estar vivo", () => {
    const tanque1 = new tanque

    expect(tanque1.estaVivo()).toBe(true);
  });
 it("El tanque debe morir de 2 disparos", () => {
   const tanque1= new tanque
   
   tanque1.recibirDisparo();
   tanque1.recibirDisparo();

    expect(tanque1.estaVivo()).toBe(false);
 });
  it("La vida del tanque debe actualizarse", () =>{
     const t1= new tanque
 
     t1.recibirDisparo()
 
     expect(t1.getVida()).toBe (1)
  });

})
  

 

 