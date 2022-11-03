class GMan{
    constructor(){
        this.power = 200;
        this.turningPower = 5;
        this.movingPower = 10;
    }

    // function to calculate no. of moves
    calculateMoves(sourceX, sourceY, destinationX, destinationY){
        let movesX = Math.abs(destinationX - sourceX);
        let movesY = Math.abs(destinationY - sourceY);

        return (movesX + movesY);
    }

    // function to calculate no. of turns
    calculateTurns(direction, sourceX, sourceY, destinationX, destinationY){

        // maximum no. of turns required in the worst case scenario
        let totalTurns = 2;

        // determines if the turn has to be made or not
        let turnFlagX = (destinationX - sourceX)/Math.abs(destinationX - sourceX);      
        let turnFlagY = (destinationY - sourceY)/Math.abs(destinationY - sourceY);  

        switch(direction){
            case 'N':
                if(sourceY <= destinationY) totalTurns--;
                if(sourceX === destinationX && turnFlagY > 0) totalTurns--;
                
                break;

            case 'E': 
                if(sourceX <= destinationX) totalTurns--;
                if(sourceY === destinationY && turnFlagX > 0) totalTurns--;   

                break;
                
            case 'S': 
                if(sourceY >= destinationY) totalTurns--;
                if(sourceX === destinationX && turnFlagY < 0) totalTurns--;
                
                break;
            
            case 'W': 
                if(sourceX >= destinationX) totalTurns--;
                if(sourceY === destinationY && turnFlagX < 0)  totalTurns--;
                
                break;
        }

        return totalTurns;
    }

    getPower(data){
        let sourceX, sourceY;
        let destinationX, destinationY;
        let direction;

        let lines = data.toString().split('\n');
        lines = lines.filter(s => s.replace(/\s+/g, '').length !== 0);

        for(let i = 0 ; i < lines.length ; i++){
            let input = lines[i].split(' ');

            switch(input[0]){
                case 'SOURCE':
                    sourceX = parseInt(input[1]);
                    sourceY = parseInt(input[2]);
                    direction = input[3].trim();
                    break;

                case 'DESTINATION':
                    destinationX = parseInt(input[1]);
                    destinationY = parseInt(input[2]);
                    break;
            }
        }

        let movesMade = this.calculateMoves(sourceX, sourceY, destinationX, destinationY);
        let turnsTaken = this.calculateTurns(direction, sourceX, sourceY, destinationX, destinationY);

        return (this.power - (this.turningPower*turnsTaken + this.movingPower*movesMade));
    }
}

module.exports = GMan;