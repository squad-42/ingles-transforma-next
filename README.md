# Inglês Transforma
![inglês-tranforma-demo](https://github.com/squad-42/ingles-transforma-next/blob/main/public/devs-squad-42/video-demo-ingl%C3%AAs-transforma.gif)

## Menu
1. [Descrição](#descrição)
2. [Funcionalidades Principais](#funcionalidades-principais)
3. [Desenvolvedores](#desenvolvedores)
4. [Instalação e Configuração](#instalação-e-configuração)
5. [Licença](#licença)

## Descrição
O Inglês Transforma é uma plataforma de ensino de inglês voltada para pessoas de baixa renda. Este repositório contém a refatoração do código da plataforma, utilizando Next.js com Bootstrap e Sass para o front-end, e Java Spring Boot com uma API para realizar operações CRUD no back-end, incluindo a criptografia de senha com Spring Security.

## Funcionalidades Principais

- **Refatoração com Next.js:** Utiliza Next.js para aprimorar a eficiência e a manutenibilidade do código do front-end.
- **Estilização com Bootstrap e Sass:** Implementa o design da plataforma utilizando Bootstrap e Sass para uma experiência visual agradável e responsiva.
- **Back-end com Java Spring Boot:** Utiliza Spring Boot para fornecer uma estrutura robusta para o back-end da aplicação.
- **CRUD com API:** Implementa operações CRUD (Create, Read, Update, Delete) utilizando uma API REST para gerenciar os dados da plataforma.
- **Segurança da Senha com Spring Security:** Criptografa as senhas dos usuários utilizando o Spring Security para garantir a segurança dos dados.

## Desenvolvedores

| David Coelho | David Henrique | Erika Alves | Erika Bedin |
| ------------ | -------------- | ----------- | ----------- |
| ![David Coelho](https://github.com/squad-42/ingles-transforma-next/blob/main/public/devs-squad-42/david-c.png) | ![David Henrique](https://github.com/squad-42/ingles-transforma-next/blob/main/public/devs-squad-42/david-h.png) | ![Erika Alves](https://github.com/squad-42/ingles-transforma-next/blob/main/public/devs-squad-42/erika-a.jpg) | ![Erika Bedin](https://github.com/squad-42/ingles-transforma-next/blob/main/public/devs-squad-42/erika-b.png) |


## Instalação e configuração:

#### No GitHub:
1. Clone este repositório:
git clone https://github.com/squad-42/Ingles-Transforma.git

#### No VSCode:
1. Abra o arquivo no VSCode.
2. No terminal, execute o seguinte comando para instalar as dependências:
    npm i
3. Em seguida, execute o comando para iniciar o servidor de desenvolvimento:
    npm run dev
4. Acesse a aplicação através do endereço recomendado (normalmente é: [http://localhost:3000/](http://localhost:3000/)).

#### No Spring Boot
1. No Spring Tool Suite ou Eclipse:
- Clique em **File** > **Import** > **Maven** > **Existing Maven Projects**.
- Selecione o diretório do projeto e clique em **Finish**.

2. Em `src/main/resources/application.properties`, substitua `<nome_do_usuario>` e `<senha_do_banco>` pelo nome de usuário e senha do seu banco de dados MySQL:
```properties
spring.datasource.username=<nome_do_usuario>
spring.datasource.password=<senha_do_banco>









