

describe('Transações', () => {
    // hooks -> executar antes ou depois / de cada ou todos os testes
    //before - executar antes de todos os testes
    //after - executar depois de todos os testes
    //beforeEach - executar antes de cada teste
    //afterEach - executar depois de cada teste

    beforeEach( () =>{
        cy.visit("https://devfinance-agilizei.netlify.app/#")
    });

    it('Cadastrar uma entrada', () => {
        criarTransacao("Freela", 250)

        cy.get("tbody tr td.description").should("have.text", "Freela")
    });

    it('Cadastrar uma saida', () => {
        criarTransacao("Cinema", -30)

        cy.get("tbody tr td.description").should("have.text", "Cinema")
    });

    it('Excluir transação', () => {
        criarTransacao("Freela", 100)
        criarTransacao("Mesada", 10)

        cy.contains(".description", "Freela")
            .parent()
            .find('img')
            .click()
            //validar quantidades de linhas
        cy.get('tbody tr').should("have.length", 1)
    });
});

function criarTransacao(descricao, valor) {
    cy.contains("Nova Transação").click()
    cy.get('#description').type(descricao)
    cy.get('#amount').type(valor)
    cy.get('#date').type("2023-02-15") //yyyy-mm-dd 

    cy.contains('button', 'Salvar'). click()
}