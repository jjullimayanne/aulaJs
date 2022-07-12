const functionPreco = require("../../src/aula_dois");
describe("should first", () => {
  it("should pass ", () => {
    ///const preco = 0.3;
    const quantidade = 11;
    ///const calculaPreco = quantidade * preco;
    expect(functionPreco(quantidade)).toBe(3.3);
  });
  it("should not be equal ", () => {
    ///const preco = 0.3;
    const quantidade = 11;
    ///const calculaPreco = quantidade * preco;
    expect(functionPreco(quantidade)).not.toBe(3.0);
  });
});
