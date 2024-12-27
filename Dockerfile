# Imagem base
FROM node:18-alpine

# Diretório de trabalho
WORKDIR /app

# Copiar arquivos necessários
COPY package.json .
COPY app.js .

# Instalar dependências
RUN npm install

# Expor a porta
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]
