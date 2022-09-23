import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

export const player1 = new Character('Player1');
export const player2 = new Character('Player2');
export const player3 = new Character('Player3');

for (let i = 0; i < 50; i += 1) player1.levelUp();

export const monster1 = new Monster();
export const monster2 = new Dragon();

export const pvp = new PVP(player2, player3);

export const pve = new PVE(player1, [monster1, monster2]);

export function runBlattles(battles: Battle[]) {
  battles.forEach((battle: Battle) => {
    battle.fight();
  });
}
