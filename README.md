# Projeto E-commerce DSCommerce
Projeto desenvolvido onde o objetivo foi de criar uma aplicação web e-commerce.
Pontos que foram vistos até alcançar o resultado final:
- Componentes React, layout com HTML e CSS
- Props, Rotas
- Hooks useState, useEffect, requisições
- Local storage e lógica de carrinho de compras
- Eventos e estado global
- Login e controle de acesso
- Formulários, CRUD completo

---
## *Features (Funcionalidades)*
Com o backend rodando simultaneamente, como CLIENTE pode-se:
- Consultar a lista de produtos disponíveis (Catálogo)
- Pesquisar produtos por nome (Catálogo)
- Adicionar e remover produtos do carrinho
- Alterar a quantidade de unidades que está no carrinho (remover item do carrinho)
- Logar-se / Deslogar-se
- Realizar a compra fictícia gerando o número de pedido

Com o backend rodando simultaneamente, como ADMINISTRADOR pode-se:
- Visualizar a lista de produtos
- Pesquisar produto por nome (Catálogo e Página Administradora)
- Adicionar, Alterar ou Excluir produtos (Página Administradora)
- Logar-se / Deslogar-se

---
## 👨‍💻️ *Tecnologias Utilizadas*
Esse projeto foi criado utilizando as tecnologias:
### Front-End  ->  HTML5, CSS3, TypeScript, React
### Editor  -> [Visual Studio Code](https://code.visualstudio.com/)

---
## *Pré-requisitos de instalação* 
O Windows 10 já possui um programa padrão para visualizar arquivos compactados.

Caso seu sistema operacional seja anterior ao Windos 10, realize o passo abaixo:

Para visualizar o projeto você precisará extrair os arquivos através de um programa para arquivos compactados.

Recomendo Winrar, baixe a versão 32x ou 64x, de acordo com seu sistema.

Link para download:
https://www.win-rar.com/download.html
---
## 📦️ *Como executar o programa*
Certifique-se de ter o Git, JDK17 e YARN instalados e siga as instruções abaixo:
```bash
  # Clone o repositório
  ❯ Clique no botão Code, depois em Download ZIP e salve o arquivo.

  # Extrair arquivos sem Winrar
  > Abra a pasta onde o arquivo foi salvo.
  >> Clique com o botão direito sobre o arquivo e selecione Extrair Tudo.
  >> As informações foram extraídas para a pasta Mod10_FrontEnd-main.

  # Extrair arquivos com Winrar
  > Abra a pasta onde o arquivo foi salvo.
  >> Clique com o botão direito sobre o arquivo e selecione Extrair Aqui (Extract Here em inglês).
  >> As informações foram extraídas para a pasta Mod10_FrontEnd-main.

  # Abrir o projeto BackEnd
  > Em sua IDE de preferência(utilizei Intellij), importe a pasta BackEnd e faça o update das dependências maven.
  >> Executar o projeto (pode ser acessado um navegador da Web em http://localhost:8080/).

  # Abrir o projeto FrontEnd
  > Abra o cmd como Administrador.
  >> Acesse a pasta Mod10_FrontEnd-msin / FrontEnd e digite o comando Yarn.
  >> Aguarde o processo e então digite o comando yarn dev. Acesse a aplicação em http://http://localhost:5173/

```
- Collections do postman para fazer as requisições GET/PUT/DELETE E UPDATE para criação do usuário, lançar as pedidos e consultar todos os produtos. Obs: Será necessário configurar a variáveis de ambiente no postman.  

   - Dados para login: maria@gmail.com (cliente) e alex@gmai.com (cliente e administrador).  

   - senha: 123456
