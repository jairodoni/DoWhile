# **Configurando OAuth App pro Mobile:**

#### OBS: Caso vc ja tenha criado um para Web, substitua as seguintes informações no OAuth App:

> Homepage URL: https://auth.expo.io/@username/dowhile <br/>
> Authorization callback URL: https://auth.expo.io/@username/dowhile

#### \* **Substitua o username da URL acima para o username da sua conta Expo, caso você não tenha conta no site da Expo acesse [https://expo.dev](https://expo.dev) para criar uma.**

<br/>
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

<img src="../.github/oauth03.png" alt="OAuth App Page"/>
<br/>
<br/>

> \* **Substitua o username da URL acima para o username da sua conta Expo, caso você não tenha conta no site da Expo acesse [https://expo.dev](https://expo.dev) para criar uma.**

<br/>

Tanto no mobile quanto no server é necessário o uso de algumas variaveis de ambiente contidas em um arquivo .env, dentre as variaveis o Client ID, o Client ID você tira do OAuth que vc acabou de criar:

<img src="../.github/oauth04.png" alt="OAuth App Page"/>
<br/>
<br/>

Você deve adicionar o Client ID na pasta **[mobile]('../web/.env.example.txt')**, **[client]('../web/.env.local.example.txt')** e na **[server]('../server/.env.example.txt')**. Na pasta server você deve adicionar tambem uma chave secreta gerada no OAuth App. Você não tera acesso a ela novamente então copie cole no .env da pasta **[server]('../server/.env.example.txt')**:

<img src="../.github/oauth05.png" alt="OAuth App Page"/>
<br/>
<br/>

Com a aplicação configurada, teste ela e o login social com o github.
