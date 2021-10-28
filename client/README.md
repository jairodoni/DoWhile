# **Configurando OAuth App pra Web:**

#### OBS: Caso vc ja tenha criado um para Mobile, substitua as seguintes informações no OAuth App:

> Homepage URL: https://localhost:3000 <br/>
> Authorization callback URL: https://localhost:3000

<br/>

## Para configurar o OAuth App você deve seguir os seguintes passos

---

<br/>

Acesse o seguinte endereço:

#### **https://github.com/settings/developers**

<br/>

Selecione a aba OAuth Apps:

<img src="../.github/oauth01.png" alt="OAuth App Page"/>
<br/>
<br/>

Preencha o formulario com as seguintes informações:

<img src="../.github/oauth02.png" alt="OAuth App Page"/>
<br/>
<br/>

Tanto no mobile quanto no server é necessário o uso de algumas variaveis de ambiente contidas em um arquivo .env, dentre as variaveis o Client ID, o Client ID você tira do OAuth que vc acabou de criar:

<img src="../.github/oauth04.png" alt="OAuth App Page"/>
<br/>
<br/>

Você deve adicionar o Client ID na pasta **[client](./.env.local.example.txt)**, **[mobile](../mobile/enviroment.js.txt)** e na **[server](../server/.env.example.txt)**. Na pasta server você deve adicionar tambem uma chave secreta gerada no OAuth App. Você não tera acesso a ela novamente então copie cole no .env da pasta **[server](../server/.env.example.txt)**:

<img src="../.github/oauth05.png" alt="OAuth App Page"/>
<br/>
<br/>

Com a aplicação configurada, teste ela e o login social com o github.
