# Sorteio Gatinhos UFRN
Repositório destinado ao desenvolvimento de API para criar uma solução que irá facilitar os sorteios do Projeto de Extensão @gatinhosdaufrn.
## Execução e testes

Para executar este projeto é necessário ter instalado os gerenciadores de pacotes npm ou yarn e o node para rodar o servidor.

Utilizei containers docker com imagem do postgres e o typeorm para gerenciamento do banco de dados.

### Ao clonar o repositório acesse o diretério raiz (gatinhosufrn-sorteio/) e execute:
  - Com o npm:
    $ npm install
  - Com o yarn:
    $ yarn
### Configuração do TypeORM:
  Após instalação das dependências, renomeie o arquivo 'ormconfig.example.json' para 'ormconfig.json'
  e preencha com as credênciais da sua database.

### Execução do projeto
  #### Com o banco de dados configurado e rodando, execute o projeto através do comando:
    - Com npm:
      $ npm run dev:server
    - Com yarn:
      $ yarn dev:server

### Testes práticos
  Para os testes práticos utilizei o software Insomnia para simular as requisições na api
