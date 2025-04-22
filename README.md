# 📈 stockexchange.front-end

Este repositório contém um projeto de exemplo para uma aplicação **front-end** desenvolvida com **Angular**.

---

## 🛠️ Ambiente de Desenvolvimento

### 🔧 Ferramentas Utilizadas para o [Back-end](https://github.com/rodrigocdellu/stockexchange.back-end)

- 🪟 **Sistema Operacional**: [Windows 10 Pro](#)  
- ⚙️ **Framework**: [.NET v8.0.408 (LTS)](https://dotnet.microsoft.com/pt-br/download/dotnet/8.0)  
- 📝 **Editor de Código**: [Visual Studio Code v1.99.3](https://code.visualstudio.com/download)  
- 🐳 **Gerenciador de Contêineres**: [Docker Desktop v4.40.0](https://www.docker.com/products/docker-desktop)  

### 🎨 Ferramentas Utilizadas para o [Front-end](https://github.com/rodrigocdellu/stockexchange.front-end)

- 🐧 **Sistema Operacional**: [Ubuntu 24.04 LTS](https://ubuntu.com/download/desktop)  
- 🌐 **Runtime JavaScript**: [Node.js v22.14.0](https://nodejs.org/pt)  
- 📦 **Gerenciador de Pacotes**: [NPM v10.9.2](https://www.npmjs.com/package/npm/v/10.9.2)  
- 🧰 **Framework Front-end**: [Angular CLI v19.2.8](https://github.com/angular/angular-cli)  

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
docker run --name stockexchange.angularui -d -p 7000:80 stockexchange.angularui
```

3. A aplicação poderá ser acessada em ambiente de produção pelo endereço:

[http://localhost:7000/](http://localhost:7000/)

---

4. Caso não consiga construir a imagem, pode baixá-la em:

[https://hub.docker.com/r/rodrigocdellu/stockexchange.angularui](https://hub.docker.com/r/rodrigocdellu/stockexchange.angularui)

---

## 🤝 Contribuições

Contribuições são bem-vindas! Se você deseja sugerir melhorias, corrigir bugs ou adicionar novas funcionalidades, sinta-se à vontade para abrir uma [Issue](https://github.com/rodrigocdellu/stockexchange.front-end/issues) ou enviar um *Pull Request*.

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
