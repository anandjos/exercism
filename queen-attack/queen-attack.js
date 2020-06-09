export class QueenAttack {
    constructor(queen = { white:[0,3], black:[7,3] }) {
      if(queen.white.toString() == queen.black.toString())
        throw new Error("Queens cannot share the same space");
      this.white = queen.white;
      this.black = queen.black;
    }

    toString() {
      let i,j;
      let str='';
      for(i=0;i<8;i++)
      {
        for(j=0;j<8;j++)
        {
          if(this.white[0]==i && this.white[1]==j)
            str=str.concat('W ');
          else if(this.black[0]==i && this.black[1]==j)
            str=str.concat('B ');
          else 
            str=str.concat('_ ');
        }
        str = str.trimEnd();
        str = str + '\n';
      } 
      return str;
    }

    canAttack() {
        if(this.white[0] == this.black[0] || this.white[1] == this.black[1])
          return true;
        return (Math.abs(this.white[0]-this.black[0]) == Math.abs(this.white[1]-this.black[1]));
    }
}
