# 📱 FitnessApp – Diário de Treinos

## 1. 🎯 Tema do Aplicativo

**Escolha:** Tema livre (foi escolhido o PROJETO 1)  
**Nome do aplicativo:** FitnessApp – Diário de Treinos  

**Descrição:**  
O FitnessApp é um aplicativo de acompanhamento de treinos voltado a usuários que desejam organizar e registrar sua rotina fitness de maneira prática e objetiva.

---

## 2. 📌 Detalhamento do Tema

**🎯 Motivação da escolha:**  
A escolha do tema se deu pelo interesse comum do grupo em práticas saudáveis, aliada à demanda crescente por soluções simples para organização de treinos.

**👥 Público-alvo:**  
Pessoas que treinam por conta própria, praticantes de academia, educadores físicos e entusiastas da saúde.

**🛠️ Utilidade da solução:**  
Permitir que usuários registrem seus treinos, acompanhem seus progressos e acessem rapidamente as informações importantes para seu dia a dia de atividades físicas.

**📦 Entidades definidas:**
- `Usuário` – Representa a pessoa que acessa o app. (Obrigatória)
- `Treino` – Representa um treino realizado pelo usuário.
- `Exercício` – Representa um exercício específico dentro de um treino.

---

## 3. ⚙️ Funcionalidades e Casos de Uso

**🔑 Requisitos Funcionais:**
- Cadastro de novo usuário
- Login/autenticação
- CRUD de Treino
- CRUD de Exercício
- Visualização da lista de treinos por data
- Navegação entre páginas (Login > Home > Detalhes)
- Logout do sistema

**➕ Requisitos adicionais:**
1. Navegação entre as páginas via botão  
2. Validação simples de campos no frontend  
3. Integração com a API backend desenvolvida pelo grupo  

**📈 Diagrama de Casos de Uso:**
Usuário
├── Criar conta
├── Fazer login
├── Cadastrar treino
│ └── Adicionar exercícios
├── Editar treino
└── Visualizar histórico


---

## 4. 🧭 Estrutura Visual e Navegação

**🖼️ Telas implementadas:**
- Tela de Login
- Tela de Cadastro
- Tela Principal (Lista de treinos)
- Tela de Detalhes do Treino
- Tela para Adicionar Treino

**🔁 Fluxo de navegação:**
1. Usuário entra na tela de login.  
2. Após login bem-sucedido, é redirecionado para a tela principal.  
3. Na tela principal, pode criar ou visualizar treinos.  
4. A navegação entre as telas é feita por botões (`Navigator.push()`)

**🎨 Protótipo visual:**  
Layout baseado no projeto do primeiro bimestre (mantida a coerência visual com fontes e cores neutras).  
⚠️ Observação: Frontend funcional, porém ainda sem fidelidade total ao Canva.

---

## 5. 🗂️ Estrutura de Dados

**🧩 Modelo relacional (DER simplificado):**

```sql
Usuário (
  id INT PRIMARY KEY,
  nome TEXT,
  email TEXT,
  senha TEXT
)

Treino (
  id INT PRIMARY KEY,
  usuario_id INT,
  data DATE,
  descricao TEXT
)

Exercicio (
  id INT PRIMARY KEY,
  treino_id INT,
  nome TEXT,
  series INT,
  repeticoes INT
)

| Componente        | Status                                |
| ----------------- | ------------------------------------- |
| API Backend       | ✅ Funcionando                         |
| Criação (Create)  | ✅ OK                                  |
| Edição (Update)   | ❌ Não implementado                    |
| Exclusão (Delete) | ✅ OK                                  |
| Frontend          | ✅ Funcional (sem fidelidade ao Canva) |

-- Tabela de Usuários
CREATE TABLE usuarios (
  id SERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  senha TEXT NOT NULL
);

-- Tabela de Treinos
CREATE TABLE treinos (
  id SERIAL PRIMARY KEY,
  usuario_id INTEGER REFERENCES usuarios(id),
  data DATE NOT NULL,
  descricao TEXT
);

-- Tabela de Exercícios
CREATE TABLE exercicios (
  id SERIAL PRIMARY KEY,
  treino_id INTEGER REFERENCES treinos(id),
  nome TEXT NOT NULL,
  series INTEGER,
  repeticoes INTEGER
);
