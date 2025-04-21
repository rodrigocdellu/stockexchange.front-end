# 📈 stockexchange.front-end

Este repositório contém um projeto de exemplo para uma aplicação **front-end** desenvolvida com **Angular**.

---

## 🛠️ Ambiente de Desenvolvimento

### 🔧 Ferramentas Utilizadas para o [Back-end](https://github.com/rodrigocdellu/stockexchange.back-end)

- 🪟 **Sistema Operacional**: Windows 10 Pro  
- ⚙️ **Framework**: .NET v8.0.408 (LTS)  
- 📝 **Editor de Código**: Visual Studio Code v1.99.3  
- 🐳 **Gerenciador de Contêineres**: Docker Desktop v4.40.0  

### 🎨 Ferramentas Utilizadas para o [Front-end](https://github.com/rodrigocdellu/stockexchange.front-end)

- 🐧 **Sistema Operacional**: Ubuntu 24.04 LTS  
- 🌐 **Runtime JavaScript**: Node.js v22.14.0  
- 📦 **Gerenciador de Pacotes**: NPM v10.9.2  
- 🧰 **Framework Front-end**: Angular CLI v19.2.8  

---

## 🚀 Ambientes de Execução

### 💻 Ambiente de Desenvolvimento (Local)

1. Certifique-se de que todas as ferramentas listadas no pacote de front-end estejam instaladas.
2. Navegue até o diretório do projeto desejado e execute o comando abaixo no **PowerShell (Windows)** ou no **Terminal (Linux)**:

```bash
npm install; ng serve
```

3. Após a execução, acesse a aplicação através do seguinte endereço:

[http://localhost:4200/](http://localhost:4200/)

---

### 📦 Ambiente de Produção (Docker)

1. Com o **Docker** devidamente instalado, execute o seguinte comando no diretório que contém o arquivo `Dockerfile`:

```bash
docker build -t stockexchange.angularui .
```

2. Após a criação da imagem, inicie o contêiner com o comando:

```bash
docker run -d -p 7200:80 stockexchange.angularui
```

3. A aplicação poderá ser acessada em ambiente de produção pelo endereço:
<DEFINIR>
[http://localhost:7200/swagger/index.html](http://localhost:7200/swagger/index.html)

---

## 🤝 Contribuições

Contribuições são bem-vindas! Se você deseja sugerir melhorias, corrigir bugs ou adicionar novas funcionalidades, sinta-se à vontade para abrir uma [Issue](https://github.com/seu-usuario/seu-repositorio/issues) ou enviar um *Pull Request*.

Por favor, siga as boas práticas de desenvolvimento e, se possível, adicione testes automatizados relacionados às suas alterações.

---

## 📄 Licença

Este projeto está licenciado sob os termos da **MIT License**. Para mais informações, consulte o arquivo [`LICENSE`](./LICENSE.md).

---

## 📬 Contato

Caso tenha dúvidas, sugestões ou feedbacks, entre em contato:

- 📧 Email: [rodrigocdellu.trabalho@outlook.com](mailto:rodrigocdellu.trabalho@outlook.com)
- 💼 LinkedIn: [linkedin.com/in/rodrigocdellu](https://linkedin.com/in/rodrigocdellu)

---

> "_O SENHOR é misericordioso e compassivo, tardio em irar-se e grande em amor leal._"  
> — Salmos 145:8







# StockExchangeAngularUI

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

