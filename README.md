# Teste de estágio front-end Move

* Dados:
    * **Nome**: Paulo Rafael Faria dos Santos
    * **Email**: santos.paulo.rf@gmail.com
    * **Whatsapp**: (11) 98107-4873 

<br />

* Stack:
  * React.js
  * Tailwind css
  * Bootstrap5
  * React Router Dom
  * Axios
  * Firebase Hosting

<br />

* Api usada: https://zoo-animal-api.herokuapp.com/
    * Api que retorna informaçoes aleatórias sobre animais de zoologico

<br />

* Tarefas:
  * [x] Decidit uma api
  * [x] Criar página simples
  * [x] Consumir a api
  * [x] Apresentar os dados em uma tabela de forma dinâmica

<br />

* Exercício em produçao: https://api-move-test.web.app/  

<br />

# Explicações

* Fiz o **commit** de cada passo da construção do projeto para poderem avaliar.
* Comecei utilizando **fetch api** para buscar informação.
* Mudei para **axios** por ser uma lib mais moderna e facil de se trabalhar. (*e por ser também bastante utilizada no mercado*)
    * Tenho conhecimento de que se utilizar **axios** dentro do **useEffect** não é a solução recomendada pelos docs do React ( *apesar de ser uma solução muito utilizada no mercado* ) e o ideal seria utilizar uma lib propria para comunicação com api como **React-Query** ( *Tanstack/reactquery* ). 
* Todos meus commits estão em **inglês** pois acho mais facil de pensar assim quando estou programando ( *não é show off, eu prometo* ).
* Quis colocar uma **página especial** para apresentar os dados de um animal só, porem a minha api não tem endpoint com a **query de id**.
* Solucionei este problema com a **context api** criando estados globais e passando para a página de mostra individual do animal.
    * Sei que context api não é a solução mais **recomendada** para controlar estados globais por conta de sempre renderizar todos os estados compartilhados, porem
por se tratar de uma aplicação bem pequena onde todos os componentes acabam ja renderizando, foi uma solução **pertinente**.
    * A solução ideal para armazenar estados globais seria ferramentas como **Redux** ou **Zustand** ou até mesmo lidar com os estados da resposta da api na "*data*" do **react Query**
* Não apresentei **paginação** pois minha api retorna no máximo 10 resultados e paginar apenas eles iria comprometer a **UX** de utilizar o campo de busca para refinar os resultados.

<br />

## Estou a disposição para esclarecer quaisquer dúvidas sobre este projeto =)