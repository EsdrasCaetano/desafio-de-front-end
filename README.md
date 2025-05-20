# Weather App - Desafio Front-end

[![Vercel Deployment](https://img.shields.io/badge/LIVE-DEMO-%23000000?style=for-the-badge&logo=vercel)](https://desafio-de-front-end-livid.vercel.app)
[![Test Coverage](https://img.shields.io/badge/Test_Coverage-85%25-green?style=for-the-badge)]()
[![Responsive](https://img.shields.io/badge/Responsive-Yes-blue?style=for-the-badge)]()

## ✨ Demonstração

![App Screenshot](https://github.com/user-attachments/assets/6320f625-317b-490d-96f0-9d0dc5aac14a)

## 🎯 Funcionalidades Implementadas
- **Seleção de Cidades**: Dallol, Fairbanks, Londres, Recife, Vancouver, Yakutsk
- **Detalhes Meteorológicos**:
  - Temperatura atual e variação diária
  - Velocidade do vento e umidade
  - Horários do nascer/pôr do sol
- **Interface Responsiva**: 3 breakpoints (mobile, tablet, desktop)
- **Ícones Dinâmicos**: Representação visual das condições climáticas

## 🛠 Stack Tecnológica
| Tecnologia         | Descrição                           |
|--------------------|-----------------------------------|
| Next.js            | Framework React para SSR          |
| TypeScript         | Tipagem estática                  |
| Tailwind CSS       | Estilização utilitária            |
| Jest/RTL           | Testes unitários e de integração  |
| WeatherAPI         | Dados meteorológicos em tempo real|
| Docker             | Containerização                   |

## ✅ Requisitos Cumpridos

- [x] **Integração com API meteorológica**  
  _Consumo eficiente da WeatherAPI com tratamento de erros_

- [x] **Testes unitários (85% de cobertura)**  
  _Jest + Testing Library com mocks de API_

- [x] **Layout fiel ao design proposto**  
  _Implementação pixel-perfect do Figma_

- [x] **Deploy automatizado na Vercel**  
  _CI/CD integrado com GitHub_

- [x] **Responsividade em 3 breakpoints**  
  _Mobile (375px), Tablet (768px), Desktop (1440px)_
- [x] **Containerização com Docker**  
  _Dockerfile otimizado para produção e desenvolvimento_

## 📋 Pré-requisitos
- Node.js 18+
- Conta na [WeatherAPI](https://www.weatherapi.com/)
- Token API válido

## 🚀 Como Executar Localmente

1. Clone o repositório:
```bash
git clone https://github.com/EsdrasCaetano/desafio-de-front-end.git
``` 
Entre no diretório do projeto

```bash
  cd desafio-de-front-end
```

Instale as dependências

```bash
  npm install
```

Crie um arquivo .env.local na raiz do projeto e configure sua API Key:

```bash
  API_KEY=seu_token_aqui
```

Inicie o servidor de desenvolvimento:

```bash
  npm run dev
```

## 🧪 Testes

## Executar testes
```bash
npm run test
```


### Destaques da adição Docker:
1. **Posicionamento estratégico**: Após a execução local e antes dos testes
2. **Comandos essenciais**:
   - Build da imagem
   - Execução básica
   - Opção de desenvolvimento com compose
3. **Formatação consistente** com o resto do documento
4. **Ícone de Docker** (🐳) para fácil identificação



## 🐳 Executando com Docker

O projeto está containerizado para maior portabilidade:

### Build e Execução

# Construir a imagem

```bash
docker build -t desafio-de-front-end .
````

# Rodar o container (produção)

```bash
docker run -p 3000:3000 desafio-de-front-end
````
