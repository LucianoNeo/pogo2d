Pokémon GO 2D VERSION é minha reimaginação do clássico sucesso mundial, onde você anda pela cidade, capturando os monstrinhos.<br>
O jogo está sendo desenvolvido com <b>REACT JS</b>, <b>Tailwind CSS</b> , <b>Javacript</b> e <b>Typescript</b> para o front-end.<br>
O back-end ainda não foi implantado mas já está sendo desenvolvido, ele utilizará <b>NODEJS + EXPRESS</b> para a criação da API REST, <b>MONGOOSE E MONGODB</b> para o banco de dados, e terá como função a criação e login de usuário, assim como controle de dados dos itens e bolsa de pokémon do jogador.<br>
O projeto está totalmente responsivo para PC, ANDROID e IOS.

<p align="center">
<img src='./screenshots/home.jpg' height='400px'/>
<img src='./screenshots/select.jpg' height='400px'/>
<img src='./screenshots/world.jpg' height='400px'/>
<img src='./screenshots/catch.jpg' height='400px'/>
<img src='./screenshots/pokemonbag.jpg' height='400px'/>
<img src='./screenshots/itemsbag.jpg' height='400px'/>
</p>

LINK PARA O JOGO:<br>
https://pokemongo2d.vercel.app/

## Detalhes técnicos:
O objetivo do jogo (até a versão 1.00) é andar pelo mapa capturando os pokémon, para posteriormente montar seu time que será usado para batalhas (na versão 2.00).
Para isso foram construídas telas, separadas como páginas no projeto, o gerenciamento de troca de telas é feito com <b>REACT ROUTER DOM</b>.<br>
A estilização em sua maior parte utiliza <b>TAILWINDCSS</b> e em alguns casos específicos <b>STYLE INLINE</b>.
As animações ou são GIFS ou animations criadas com <b>CSS</b> e <b>JAVASCRIPT</b>.<br>
O jogo contém músicas e efeitos sonoros controlados pela <b>WEB AUDIO API</b> do JAVASCRIPT, setadas como <b>REFERÊNCIAS(useRef)</b>  do REACT, para um controle mais preciso do início e pausa das músicas.<br>
Na criação das variáveis e arrays do jogo, foi utilizado gerenciamento de <b>ESTADOS(useState)</b> do REACT juntamente com <b>CONTEXT API(useContext)</b> para compartilhar as informações entre todas as páginas.<br>
Utilizei arrays para: 
- a criação inicial dos pokémon no mapa
- a criação inicial das pokéstops no mapa
- a criação da bolsa de pokémon do jogador
- a criação inicial dos itens do jogador
<br>
Até que o back-end seja implantado estes dados são salvos a cada alteração, utilizando <b>LOCALSTORAGE</b>, assim se o usuário sai da página, ao voltar ele tem suas informações obtidas novamente e continuará com o mesmo estado em que saiu do jogo, podendo escolher se quer CONTINUAR ou iniciar um NOVO JOGO (limpando assim o LOCALSTORAGE).<br>
Cada pokémon tem seus atributos principais retirados de um array fixo, que foi obtido através da POKEAPI (https://pokeapi.co/) para agilizar o desenvolvimento.<br>
Inicialmente (na versão 0.85) estão sendo utilizados:<br>
- name
- number(id)
- types
<br>
Para o sistema de batalhas as informações que serão adicionadas serão:<br>
- baseStats (attack, defense, stamina)<br>
- movesets


# Pokemon Go 2D Roadmap to 1.00

- [x] loading screen
- [x] pokestops creation
- [x] pokemon creation
- [x] map screen
- [x] menu
- [x] catch screen
- [x] pokemon removal on catch 
- [x] map boundaries
- [x] mobile joystick
- [x] change alerts for screen texts
- [x] CP calculation
- [x] Add pokemon types
- [x] pokemon bag
- [x] character selection
- [x] bag creation
- [x] bag screen
- [x] items bag creation
- [x] items bag screen
- [x] music
- [x] sfx
- [x] permanent save (localstorage)
- [x] continue / new game
- [x] pokemon movesets
- [x] pokemon details screen
- [ ] level up system



# Pokemon Go 2D Roadmap to 2.00
- [ ] authentication system
- [ ] cloud saving
- [ ] battle system
- [ ] gym battles
- [ ] raid battles
- [ ] ?pvp battles?
