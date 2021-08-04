<!-- desde 1978 -->
<!-- slider sem contrste na barra. -->

# Base_URL da imagem:

<!-- https://storage.googleapis.com/imagens.clima.tempook.com/web/global/hist/med/pnmm/web_global_hist_med_pnmm_2020-Jan_layer1_5e1fd2bf.png -->
<!-- https://storage.googleapis.com/imagens.clima.tempook.com/web/brasil/hist/anom/variavel/web_brasil_hist_anom_variavel_2021-Jul_layer4_695a2d8f.png
 -->

# Organizacao do projeto e pastas:

- Todas as pastas comecam com letras minusculas, apenas as pastas que sao componentes react comecao com Maiuscula, pois o React exige que assim sejam declarados.

1. Pasta src contem o fonte.
2. os componentes react estao na pasta components
3. as configuracoes na config
4. a baseURL para os endpoints estao na services
5. o redux esta na pasta store
6. e as funcoes auxiliares na pasta utils.

# Pasta Components:Atomic Design Pattern:

-Dividem-se em 5 pastas:

1. pages: Sao cada aba do website: por exemplo: Mapas, Clima, Animacoes, Hidrica, Eolica, Estacoes, Arquivos
2. smartTemplates: Sao os containers que contem a 'inteligencia' (chamadas a apis, armazenam os estados dos componentes filhos, contem as actions do redux...) e repassam as informacoes para os componentes filhos mais burros.
3. organisms: Sao componentes intermediarios que contem estruturas 'vivas', com identidade composta por componentes mais genericos, simples e mais burros.
4. molecules: Sao compoenentes simples compostos de pequenos atomos mais simples.
5. atoms: Sao os compoentes mais simples de todos, apenas recebem informacao.

- do 1 ao 5, o tamanho dos componentes sempre diminuira e se atomizará. Assim como a inteligencia (armazenamento de estados) é maior nos componentes mais acima, e menor nos componentes menores.

# Arquivo globalValues.js

1. É o arquivo que traduz os valores dos filtros para os respectivos valores em numeros. Ex: ( 0: 'ind', 1: 'hist').
2. As strings desse 'de/para' estão definidas conforme a api do Heitor recebe no body da requisicao que devolve os links das imagens. Ou seja, as strings devem sempre obedecer à nomenclatura definida e exigida pela api.

# Arquivo data.js dos filtros ('./tempook-react/src/components/molecules/selectors/IndexTypes/data.js')

1. Esse arquivo contem os dados que serão disponibilizados no filtro.
2. Os números (values) de cada item representam os números no dicionário definido no arquivo globalValyes.js

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
