# Para resalizar os testes localmente siga os passos abaixo
## *Pré-requisitos para testes locais* 
Para testar localmente você deve ter instalados em sua máquina:

### 1) Descompactador de arquivos
O Windows 10 já possui um programa padrão para visualizar arquivos compactados. Caso seu sistema operacional seja anterior ao Windos 10, realize o passo abaixo:

Para visualizar o projeto você precisará extrair os arquivos através de um programa para arquivos compactados.

Recomendo Winrar, baixe a versão 32x ou 64x, de acordo com seu sistema.

Link para download: https://www.win-rar.com/download.html

---
## 📦️ *Realizando teste localmente*
Certifique-se de ter o JDK17, YARN e IntelliJ instalados e siga as instruções abaixo:

### 1) Clone (baixe) o repositório

Nesta página, clique no botão Code, depois em Download ZIP e salve o arquivo.

![image](https://github.com/Tleofreitas/DSCommerceFrontEnd/assets/88738577/9c9aa34a-ed45-4a67-b17c-4a690922630a)

Extrair arquivos: Abra a pasta onde o arquivo foi salvo.

### 2) Extração
### 2.1) Extrair arquivos sem Winrar
Clique com o botão direito sobre o arquivo e selecione Extrair Tudo. As informações foram extraídas para a pasta DSCommerceFrontEnd-main.

### 2.2) Extrair arquivos com Winrar
Clique com o botão direito sobre o arquivo e selecione Extrair Aqui (Extract Here). As informações foram extraídas para a pasta DSCommerceFrontEnd-main.

### 3) Execução do Back-End

[Nesta página](https://github.com/Tleofreitas/DSCommerceBackEnd), clique no botão Code, depois em Download ZIP e salve o arquivo.

![image](https://github.com/Tleofreitas/DSCommerceBackEnd/assets/88738577/386584fa-f7f6-4f41-a809-af26f034654c)

Extrair arquivos: Abra a pasta onde o arquivo foi salvo.

### 3.1) Extração do Back-End
### 3.1.1) Extrair arquivos sem Winrar
Clique com o botão direito sobre o arquivo e selecione Extrair Tudo. As informações foram extraídas para a pasta DSCommerceBackEnd-main.

### 3.1.2) Extrair arquivos com Winrar
Clique com o botão direito sobre o arquivo e selecione Extrair Aqui (Extract Here). As informações foram extraídas para a pasta DSCommerceBackEnd-main.

### 4) Abrir e executar Projeto
No IntelliJ, clique em Open, selecione a pasta onde você salvou o projeto, dentro da pasta do projeto selecione BackEnd, Ok...
<br></br>

![image](https://github.com/Tleofreitas/DSCommerceBackEnd/assets/88738577/c26f16b5-4d1d-4866-92b6-dd9063b8ea31)

Caso apareça a tela abaixo, selecione Maven Project...

![image](https://github.com/Tleofreitas/Mod8_SistemaDeEvento/assets/88738577/78d9394f-3a72-48db-bd6b-887931ee1537)

Aguarde a importação do projeto (acompanhe a barra de carregamento no canto inferior direito).

Acesse BackEnd > src > main > java > DscommerceApplication, clique com botão direito e clique em Run e aguarde o programa ser iniciado...

![image](https://github.com/Tleofreitas/DSCommerceBackEnd/assets/88738577/9fb0741e-98e5-4545-a14c-8a36456d4964)

No menu Run, pode-se ver o tempo de inicialização e a indicação de processo rodando...

![image](https://github.com/Tleofreitas/Mod8_SistemaDeEvento/assets/88738577/e42bb25a-a81d-4c80-8cb1-98c625535218)

### 3) Execução do Front-End
Abra o cmd como Administrador, Acesse a pasta Mod10_FrontEnd-main/FrontEnd e digite o comando Yarn.
```bash
yarn
```
Aguarde o processo e então digite o comando yarn dev.
```bash
yarn dev
```
Acesse a aplicação em http://http://localhost:5173/
