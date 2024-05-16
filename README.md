

# New Shape 365

* Projeto avaliativo  Módulo 1 do curso  Futuro Dev Tubarão V2.
* Neste projeto desenvolvi uma aplicação relacionada a locais de exercícios ou práticas esportivas, onde os usuários podem se cadastrar, visualizar e editar informações sobre os locais onde praticam esportes.



## Documentação da API

Aqui está uma explicação mais detalhada da aplicação:

* Cadastro e autenticação de usuários:  
A aplicação permite que os usuários se 
cadastrem e façam login para acessar as funcionalidades.

* Gerenciamento de locais de exercícios:   
Os usuários podem adicionar, visualizar, 
editar e excluir informações sobre os locais onde praticam esportes. Isso é 
feito através da página "Locais", onde os usuários podem ver uma lista de locais 
cadastrados, editar informações desses locais e até mesmo excluí-los.

* Modal de edição:  
Foi implementado um modal que aparece quando os usuários clicam no botão "editar" ao lado da lista de exercícios. 
Esse modal permite que os usuários editem as informações do local selecionado.

* Persistência de dados:   
Esta aplicação  utiliza o localStorage para armazenar informações sobre o login do usuário. Além disso, os dados dos locais de exercícios estão sendo armazenados  no json-server.

Em resumo, esta aplicação é uma plataforma para gerenciamento de locais de exercícios, onde os usuários podem cadastrar, visualizar 
e editar informações sobre esses locais.


## Instalação

Instalar as dependências

```bash
  npm install
```
Abrir o projeto

```bash
  npm run dev
```   
Abrir o json-server

```bash
  npm run backend
```


## Tecnologias usadas

 - React: Uma biblioteca JavaScript para a construção de interfaces de usuário.
 - Axios: Uma biblioteca JavaScript para fazer requisições HTTP a endpoints de uma API.
 - React Router DOM: Uma biblioteca para roteamento de páginas em aplicações React que utilizam o navegador.
 - HTML e CSS: Linguagens de marcação e estilização padrão para desenvolvimento web.


## Melhorias que podem ser aplicadas no projeto

* Validar o evento de click do botão excluir e editar, pedindo a confirmação do evento.
* Acessibilidade. 
* Refatorar o código para uma fácil manutenção.
* Melhorias de performance.




