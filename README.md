# Instalação do projeto:
- Clone o repositório para uma pasta qualquer em sua máquina;
- Abra o terminal nesta pasta, e digite:
- `npm install && npm run dev`
- Um link para o localhost na porta padrão, 5173, deverá ser exibido no terminal assim que o build for completo.

## Estrutura do projeto:
O projeto possui 4 managers, e 1 service, sendo eles:

### AuthManager: 
Responsável pelo fluxo de autenticação do usuário e por armazenar as informações básicas do usuário logado.
Foi feito de uma maneira bem simbólico, para representar um fluxo real de login.

### CryptoManager: 
Responsável por gerir informações acerca das criptomoedas disponíveis, como preço em USD, nome, símbolo, bem como armazenar o estado da moeda selecionada atualmente.

### PositionManager: 
Responsável por armazenar as informações de posição do usuário em cada asset (criptomoeda), mantendo uma lista de operações geradas fake. Também de maneira minimamente funcional, para representar um caso real.

### RateManager: 
Responsável por armazenar as cotações das moedas fiduciárias, bem como prover métodos de conversão (ex.: 2 USD em BRL).

### CoincapService: 
Responsável por comunicar-se com a API do Coincap, buscando por exemplo, lista de criptomoedas disponíveis, preços em USD, cotações de moedas fiduciárias, etc.


## Passos no planejamento do projeto.
### Prototipação do projeto com Figma
Layout responsivo

## Criação do projeto com uso do Vite
Vite é o builder mais utilizado na atualidade, por ser construído com a tecnologia ESBuild em dev, deixando o bundler final apenas para builds de produção.

## Inicialização do repositório git.

## Instalação das bibliotecas necessárias:
### Sass:	
Pre-processador CSS, utilizado para estilização dos componentes.

### Axios: 
HTTP requester largamente utilizado, com vantagens de prover diversos tratamentos como: retrocompatibilidade, transformação de dados JSON automática, interceptadores, etc.

### vue-router@4:
Componente responsável por rotear páginas na aplicação Vue.

## Definição inicial da estrutura do projeto
Haverão duas páginas: login e dashboard  
A página do login não foi estilizada. Ela existe apenas para simbolizar o roteamento da aplicação.

## Definição e implementação dos módulos que servirão dados e funções, como conversão, busca de cotações, etc.

## Criação dos componentes mais atômicos, como:
### CryptoSelector: 
responsável por exibir a criptomoeda selecionada atualmente e/ou trocar para a próxima disponível.


### Table: 
uma tabela que possui uma rígida estrutura de dados dinâmica, onde as colunas são ligadas (via tipagem TS) com as propriedades presentes no objeto a ser exibido.
Definição de recursos, como: SVGs dos ativos (foi adicionado para BTC, ETH e USDT).

## Implementação de métodos utilitários para agirem como helpers ao longo de toda a aplicação. 
São funções puras que retornam valores tratados, como formatação, arredondamento de números, etc.
