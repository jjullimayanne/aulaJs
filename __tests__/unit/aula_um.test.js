const functionSenha = require("../../src/aula_um");
describe("password should be correct", () => {
  it("should be correct", () => {
    expect(functionSenha(1234)).toBe("ACESSO PERMITIDO");
  });
  it("should be wrong", () => {
    const password = jest.fn();
    password.mockReturnValue(1235);

    expect(functionSenha(password)).toBe("ACESSO NEGADO");
  });
});
