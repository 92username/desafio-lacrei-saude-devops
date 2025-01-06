[![CI/CD Build Push and Deploy](https://github.com/92username/desafio-lacrei-saude-devops/actions/workflows/pipeline2.yml/badge.svg)](https://github.com/92username/desafio-lacrei-saude-devops/actions/workflows/pipeline2.yml)

# Desafio Lacrei Saúde - DevSecOps

## Descrição

Este repositório contém o desafio de DevSecOps para a Lacrei Saúde. O objetivo deste projeto é demonstrar habilidades em DevSecOps, envolvendo a criação, configuração e automação de um pipeline de CI/CD seguro. Este é um projeto voluntário e representa a segunda tentativa de completar o desafio.

## Objetivos

- Implementar um pipeline de CI/CD utilizando melhores práticas de DevSecOps.
- Garantir a segurança e a integridade do código durante todo o ciclo de vida do desenvolvimento.
- Automatizar testes e validações de segurança.
- Documentar todo o processo para facilitar a compreensão e reprodução do projeto.

## Tecnologias Utilizadas

- **JavaScript**: Utilizado para o desenvolvimento de scripts e automações necessárias no pipeline.
- **Docker**: Utilizado para a criação de containers que garantem a consistência do ambiente de desenvolvimento e produção.
- **Dockerfile**: Contém as instruções para a criação das imagens Docker utilizadas no projeto.

## Como Usar

### Pré-requisitos

- [Docker](https://www.docker.com/get-started) instalado na máquina.
- Conta no GitHub para clonar o repositório.

### Passo a Passo

1. Clone o repositório para sua máquina local:
   ```sh
   git clone https://github.com/92username/desafio-lacrei-saude-devops.git
   ```

2. Navegue até o diretório do projeto:
   ```sh
   cd desafio-lacrei-saude-devops
   ```

3. Construa a imagem Docker:
   ```sh
   docker build -t lacrei-saude-devops .
   ```

4. Execute o container Docker:
   ```sh
   docker run -d -p 8080:80 lacrei-saude-devops
   ```

5. Acesse a aplicação em seu navegador:
   ```
   http://localhost:8080
   ```

## Funcionamento do Pipeline CI/CD

O pipeline de CI/CD foi configurado para automatizar os seguintes passos:

1. **Build**: Constrói a imagem Docker utilizando o `Dockerfile`.
2. **Test**: Executa testes automatizados para validar a funcionalidade e segurança do código.
3. **Deploy**: Realiza o deploy da aplicação em um ambiente de produção.

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorar este projeto.




