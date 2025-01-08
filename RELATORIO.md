# Relatório de Desenvolvimento - Desafio Técnico DevSecOps - Lacrei Saúde

## Objetivo:
Avaliar os conhecimentos e habilidades da pessoa voluntária em implementar pipelines de CI/CD com foco em segurança e eficiência, utilizando ferramentas e práticas aplicadas na infraestrutura da Lacrei Saúde.

---

## Tarefas do Desafio

### 1. **Setup Inicial**
- [x] **Configurar um repositório no GitHub com a aplicação de exemplo (API básica em Node.js)**

- [x] **Criar um arquivo `Dockerfile` para containerizar a aplicação**
  - Comentários:
  - O **Dockerfile** usa a imagem oficial do **Node.js 18 Alpine** e define **`/app`** como diretório de trabalho. Os arquivos **`package.json`** e **`app.js`** são copiados para o contêiner, e as dependências são instaladas com **`npm install`**. A **porta 3000** é exposta, e o comando **`npm start`** inicia a aplicação.

### 2. **Criação do Pipeline**
- [x] **Configuração do pipeline no GitHub Actions com os seguintes estágios:**

    #### 2.1 **Build**
    - [x] **Instalar as dependências**
    - [x] **Realizar testes unitários (criar um teste simples usando Jest)**
      - Comentários:
      - O pipeline instala as dependências com npm install e executa testes unitários utilizando o Jest através do comando npm test. O Jest é configurado para rodar automaticamente

    #### 2.2 **Análise de Segurança**
    - [x] **Integrar a ferramenta OWASP ZAP para escanear vulnerabilidades na aplicação**
    - [ ] **Gerar um relatório de vulnerabilidades como artefato do pipeline**
      - Comentários:
      - A integração da ferramenta OWASP ZAP para escanear vulnerabilidades foi a parte mais desafiadora deste desafio, pois era uma área nova para mim. A falta de prática e o conhecimento limitado sobre a ferramenta dificultaram o progresso e a finalização dessa tarefa. Embora tenha enfrentado desafios, foi uma oportunidade importante de aprendizado e de evolução na aplicação de práticas de segurança em CI/CD.

    #### 2.3 **Deploy Simulado**
    - [ ] **Simular o deploy realizando um push da imagem Docker para o Docker Hub**
      - Comentários:
      - 

### 3. **Requisitos de Segurança**
- [ ] **Configurar as permissões do pipeline para que apenas branches protegidas possam acionar o deploy**
  - Comentários:
  - 
- [ ] **Configurar secrets no GitHub para armazenar credenciais de acesso ao Docker Hub**
  - Comentários:
  - 

### 4. **Documentação**
- [ ] **Adicionar um arquivo `README.md` explicando:**
  - [ ] **Como configurar o pipeline**
  - [ ] **Como executar a aplicação localmente**
  - [ ] **Quaisquer decisões técnicas tomadas durante o desafio**
  - Comentários:
  - 

### 5. **Entrega**
- [ ] **Disponibilizar o link do repositório no GitHub para avaliação**
  - Comentários:
  - 

---

## **Critérios de Avaliação**

- [ ] **Configuração do CI/CD**: A capacidade de criar um pipeline funcional e bem estruturado.
  - Comentários:
  - 
- [ ] **Integração de Segurança**: Uso adequado do OWASP ZAP e geração de relatórios de vulnerabilidades.
  - Comentários:
  - 
- [ ] **Boas Práticas**: Utilização de secrets, proteção de branches e organização do repositório.
  - Comentários:
  - 
- [ ] **Documentação**: Clareza e completude das instruções no README.
  - Comentários:
  - 
- [ ] **Criatividade e Inovação**: Soluções inteligentes ou melhorias sugeridas no processo.
  - Comentários:
  - 

---

## **Dicas**

- Utilize a documentação oficial das ferramentas sempre que necessário.
- Demonstre conhecimento prático de segurança aplicável a CI/CD.
- Envolva práticas que reflitam preocupação com escalabilidade e manutenção.

---

### **Comentários Finais:**
- 
- 
