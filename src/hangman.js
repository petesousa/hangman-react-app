import axios from 'axios';
// import _ from 'lodash';

const HangmanApiConfig = {
  baseUrl: 'http://localhost:8080/hangman',
  gameUrl: '/game',
  playerUrl: '/player'
}

class Hangman {
  constructor() {
    this.apiConf = HangmanApiConfig;
    this.loading = false;
  }
  
  isLoading = () => this.loading;
  startLoading = () => this.loading = true;
  finishedLoading = () => this.loading = false;

  // setGame = game  => this.game = game;
  // setPlayer = player => this.player = player;
  // updateBills = bills => bills.map(bill => this.bills = [ ...this.bills, bill ]);

  async createPlayer(username) {

    const { baseUrl, playerUrl } = this.apiConf;
    const createPlayerUrl = baseUrl + playerUrl;

    const playerInfo = { username: "username" };
    const player = await axios.post(createPlayerUrl, playerInfo)
      .then(payload => payload.data);

    return player;
  }

  async createGame(playerId) {

    const { baseUrl, gameUrl } = this.apiConf;
    const createGameUrl = baseUrl + gameUrl;
    const playerInfo = { playerId: playerId };

    const game = await axios.post(createGameUrl, playerInfo)
      .then(payload => payload.data);

    return game;

  }

  async guessCharacter(gameId, character) {

    const { baseUrl, gameUrl } = this.apiConf;
    const patchGameUrl = baseUrl + gameUrl + "/" + gameId;
    const gameGuess = {
      character: character
    }

    const game = await axios.put(patchGameUrl, gameGuess)
      .then(payload => payload.data);

    return game;

  }

  // async loadBills() {
  //   const { baseUrl } = this.apiConf
  //   const bills = await axios.get(baseUrl)
  //     .then(payload => {
  //       return payload.data.content.map(bill => {
  //         const { id, title, value, dueDate, paymentDate, valueWithInterest } = bill
  //         const dueDateFormated = this.formatDate(dueDate)
  //         const paymentDateFormated = this.formatDate(paymentDate)

  //         return {
  //           id,
  //           title,
  //           value,
  //           dueDateFormated,
  //           paymentDateFormated,
  //           valueWithInterest
  //         }
  //       })
  //     })
  //     .catch(err => [])
  //   return bills
  // }

}

export default new Hangman()
