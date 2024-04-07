Inicializar um projeto Node
    npm init --yes

Inicializar o Cypress
    npm install -D cypress
    npm install -D cypress@12.5.0

Abrir o Cypress
    npx cypress open

Comando para rodar os teste
    npx test

Identificar os arquivos de testes sem abrir a interface(vai gerar um video)
    npx cypress run

comando para abrir interface no tamanho de mobile
    npx cypress run --config viewportHeight=1000,viewportWidth=600

documentação
https://docs.cypress.io/guides/guides/command-line

plataforma para relatorio dos testes - Visualize e depure resultados de testes anteriores do seu ambiente de CI.
https://cloud.cypress.io/