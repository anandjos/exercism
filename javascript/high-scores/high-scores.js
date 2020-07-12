export class HighScores {
  constructor(score) {
    this.score = score;
  }

  get scores() {
    return this.score;
  }

  get latest() {
    return this.score.pop();
  }

  get personalBest() {
    return Math.max(...this.score);
  }

  get personalTopThree() {
    return this.score.sort((a,b) => b-a).slice(0,3);
  }
}
