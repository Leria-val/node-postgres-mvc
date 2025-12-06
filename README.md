# Cadastro de Funcionários - API Node.js + PostgreSQL

API simples para gerenciar funcionários de uma empresa utilizando **Node.js**, **Express**, **pg-promise** e **PostgreSQL**.

---

## Tecnologias

- Node.js
- Express
- PostgreSQL 17-18
- pg-promise
- Dotenv
- Thunder Client / Postman para testes

---

## Clonar o repositório

```bash
git clone <URL_DO_SEU_REPOSITORIO>
cd <PASTA_DO_PROJETO>
````

# Instalar dependências


```bash
npm install
npm install cors
npm install dotenv
npm install express
npm install pg promise pg

ou

npm install bcrypt@^6.0.0 cors@^2.8.5 dotenv@^17.2.3 express@^5.2.1 pg@^8.16.3 pg-promise@^12.3.0 promise@^8.3.0
```

**Configurar o arquivo `.env`** (mesma pasta que `server.js`):

```
DB_HOST=localhost
DB_PORT=5432
DB_USER=devuser
DB_PASS=123321
DB_NAME=empresa
API_PORT=3000
```

> Substitua `DB_USER` e `DB_PASS` pelos dados do seu PostgreSQL.

# Criar base de dados e tabela no PostgreSQL

No pgAdmin → Query Tool:

```sql
-- Criar usuário
CREATE USER devuser WITH PASSWORD '123321';

-- Criar base de dados
CREATE DATABASE empresa OWNER devuser;

-- Dar privilégios
GRANT ALL PRIVILEGES ON DATABASE empresa TO devuser;

-- Criar tabela
CREATE TABLE funcionarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cargo VARCHAR(50) NOT NULL
);
```

# Iniciar o servidor

```bash
node server.js
```

Deve aparecer:

```
O servidor está rodando em localhost:3000/
```

---

## 🔗 Rotas da API

| Método | Rota                | Descrição                   | Body JSON                                        |
| ------ | ------------------- | --------------------------- | ------------------------------------------------ |
| GET    | `/funcionarios`     | Lista todos os funcionários | —                                                |
| GET    | `/funcionarios/:id` | Busca funcionário por ID    | —                                                |
| POST   | `/funcionarios`     | Cria novo funcionário       | `{ "nome": "Nome", "cargo": "Cargo" }`           |
| PUT    | `/funcionarios/:id` | Atualiza funcionário        | `{ "nome": "Novo nome", "cargo": "Novo cargo" }` |
| DELETE | `/funcionarios/:id` | Deleta funcionário          | —                                                |

---

##  Observações

* Certifique-se de que PostgreSQL está rodando.
* Verifique se o arquivo `.env` está correto.
* Se usar PostgreSQL 17/18, o método de autenticação deve ser **md5** no arquivo `pg_hba.conf`.

---

## 📌 Autor

Valeria Martinez, Desenvolvimento em Sistemas

```

---

Si quieres, puedo hacer **una versión todavía más visual**, con diagramas de la API y ejemplos de JSON de respuesta, para que tu README quede **profesional y listo para entregar o subir a GitHub**.  

¿Quieres que haga esa versión visual también?
```
