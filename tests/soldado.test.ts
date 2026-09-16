import { describe, it, expect } from 'vitest';
import { soldado } from "../src/Soldado";

describe("soldado", () => {
  it("Soldado debe estar vivo", () => {
    const soldado1 = new soldado()

    expect(soldado1.estaVivo()).toBe(true);
  });
  it("Soldado debe morir de 1 disparo", () => {
     const soldado1 = new soldado()

     soldado1.recibirDisparo();

     expect(soldado1.estaVivo()).toBe(false)

    
});                                                                                                                                                             
})
