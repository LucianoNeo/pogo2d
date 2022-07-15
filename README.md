Pokémon GO 2D VERSION é minha reimaginação do clássico sucesso mundial, onde você anda pela cidade, capturando os monstrinhos.<br>
O jogo está sendo desenvolvido com REACT JS, Tailwind CSS , Javacript e Typescript para o front-end.<br>
O back-end ainda não foi implantado mas já está sendo desenvolvido ,ele utilizará NODEJS +EXPRESS para a API REST, MONGODB para o banco de dados, e fará a parte de criação e login de usuário, assim como controle de dados dos itens e bolsa de pokémon do jogador.<br>
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
Para isso foi construído as telas do jogo, separadas como pages no projeto, o gerenciamento de troca de telas é feito com REACT ROUTER DOM.<br>
A estilização em sua maior parte utiliza TAILWINDCSS e em alguns casos específicos STYLE INLINE.<br>
As animações ou são GIFS ou animations criadas com CSS e JAVASCRIPT.<br>
Para a criação das variáveis e arrays do jogo, foi utilizado CONTEXT API que compartilha as informações entre todas as páginas.<br>
Utilizei arrays para: 
- a criação inicial dos pokémon no mapa
- a criação inicial das pokéstops no mapa
- a criação da bolsa de pokémon do jogador
- a criação inicial dos itens do jogador

Cada pokémon tem seus atributos principais retirados de um array fixo, que foi obtido através da POKEAPI (https://pokeapi.co/) para agilizar o desenvolvimento.<br>
Inicialmente (na versão 0.85) estão sendo utilizados:
- name
- number(id)
- types
<br>
Para o sistema de batalhas as informações que serão adicionadas serão:<br>
- baseStats (attack, defense, stamina)
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
- [ ] pokemon movesets
- [ ] pokemon details screen
- [ ] level up system



# Pokemon Go 2D Roadmap to 2.00
- [ ] authentication system
- [ ] cloud saving
- [ ] battle system
- [ ] gym battles
- [ ] raid battles
- [ ] pvp battles
