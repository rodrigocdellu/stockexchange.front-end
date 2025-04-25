# 📈 stockexchange.front-end

Este repositório contém uma aplicação **front-end** desenvolvida em **Angular CLI** para o setor financeiro com o objetivo de aprender e exercitar novas tecnologias e conceitos.

## 🛠️ Ambiente de Desenvolvimento

### 🔧 Ferramentas Utilizadas

- 🖥 **Sistema Operacional 1**: [Windows 10 Pro](#)
- 🐧 **Sistema Operacional 2**: [Ubuntu 24.04 LTS](https://ubuntu.com/download/desktop)  
- 📝 **Editor de Código 1**: [Visual Studio Code v1.99.3](https://code.visualstudio.com/download)
- 📝 **Editor de Código 2**: [Visual Studio 2022 Community v17.13.6](https://visualstudio.microsoft.com/pt-br/downloads)  
- 🐳 **Gerenciador de Contêineres**: [Docker Desktop v4.40.0](https://www.docker.com/products/docker-desktop)
- 👀 **Analisador de Código Estático e Testes**: [SonarQube Cloud](https://sonarcloud.io)  

### 🔧 Pacotes Utilizados para o [Back-end](https://github.com/rodrigocdellu/stockexchange.back-end)

- ⚙️ **Framework**: [.NET v6.0.36 (LTS)](https://dotnet.microsoft.com/pt-br/download/dotnet/6.0) com suporte ao [.NET v8.0.408 (LTS)](https://dotnet.microsoft.com/pt-br/download/dotnet/8.0)  
- 🐞 **Framework de Teste da Microsoft**: [Microsoft.NET.Test.Sdk v17.8.0](https://www.nuget.org/packages/Microsoft.NET.Test.Sdk/17.8.0)  
- 🐞 **Framework de Teste**: [NUnit v3.14.0](https://www.nuget.org/packages/NUnit/3.14.0)  
- 🐞 **Ferramenta para Coletar Code Coverage**: [coverlet.collector v6.0.4](https://www.nuget.org/packages/coverlet.collector/6.0.4)  
  
### 🎨 Pacotes Utilizados para o [Front-end](https://github.com/rodrigocdellu/stockexchange.front-end)

- 🐧 **Sistema Operacional**: [Ubuntu 24.04 LTS](https://ubuntu.com/download/desktop)  
- 🌐 **Runtime JavaScript**: [Node.js v22.14.0](https://nodejs.org/pt)  
- 📦 **Gerenciador de Pacotes**: [NPM v10.9.2](https://www.npmjs.com/package/npm/v/10.9.2)  
- 🧰 **Framework Front-end**: [Angular CLI v19.2.8](https://github.com/angular/angular-cli)  

## 🚀 Ambientes de Execução

### 💻 Ambiente de Desenvolvimento (Local)

1. Siga os passos presentes no [stockexchange.back-end](https://github.com/rodrigocdellu/stockexchange.back-end) para subir a aplicação **StockExchange.WebAPI**.


2. Certifique-se de que todas as ferramentas e pacotes utilizados estejam instaladas e funcionando. Os comandos a seguir podem ser executados no **PowerShell (Windows)** ou no **Terminal (Linux)**:

```
git clone git@github.com:rodrigocdellu/stockexchange.front-end.git;
cd stockexchange.front-end/StockExchange.AngularUI/;
npm install; ng serve
```

3. Após a execução, acesse a aplicação através do seguinte endereço:

[http://localhost:4200/](http://localhost:4200/)

**IMPORTANTE**: Para uma melhor experiência, verifique se a aplicação **StockExchange.WebAPI** presente em [stockexchange.back-end](https://github.com/rodrigocdellu/stockexchange.back-end) está em execução. Assim você poderá verificar a comunicação front-end (Angular CLI) e back-end (.NET Core).

### 📦 Ambiente de Produção (Docker)

1. Com o **Docker** devidamente instalado, execute o seguinte comando no diretório que contém o arquivo `Dockerfile`:

```
docker build -t stockexchange.angularui .
```

2. Após a criação da imagem, inicie o contêiner com o comando:

```
docker run --name stockexchange.angularui -d -p 7000:80 stockexchange.angularui
```

3. A aplicação **StockExchange.AngularUI** poderá ser acessada em ambiente de produção pelo endereço:

[http://localhost:7000/](http://localhost:7000/)

4. Caso não consiga construir a imagem, pode baixá-la em:

[https://hub.docker.com/r/rodrigocdellu/stockexchange.angularui](https://hub.docker.com/r/rodrigocdellu/stockexchange.angularui)

## 💕 Clean Code

Aqui disponibilizo os [resultados da analise estática de cógido](https://sonarcloud.io/organizations/rodrigocdellu/projects) com as configurações padrão do SonarQube Cloud.

## 🤝 Contribuições

Contribuições são bem-vindas! Se você deseja sugerir melhorias, corrigir bugs ou adicionar novas funcionalidades, sinta-se à vontade para abrir uma [Issue](https://github.com/rodrigocdellu/stockexchange.front-end/issues) ou enviar um *Pull Request*.

Por favor, siga as boas práticas de desenvolvimento e, se possível, adicione testes automatizados relacionados às suas alterações.

## 📄 Licença

Este projeto está licenciado sob os termos da **MIT License**. Para mais informações, consulte o arquivo [`LICENSE`](./LICENSE.md).

## 📬 Contato

Caso tenha dúvidas, sugestões ou feedbacks, entre em contato:

- 📧 Email: [rodrigocdellu.trabalho@outlook.com](mailto:rodrigocdellu.trabalho@outlook.com)
- 💼 LinkedIn: [linkedin.com/in/rodrigocdellu](https://linkedin.com/in/rodrigocdellu)

---

> "_O SENHOR é misericordioso e compassivo, tardio em irar-se e grande em amor leal._"  
> — Salmos 145:8
