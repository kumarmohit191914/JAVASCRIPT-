let turn = 10;
let Score = 0;
while (turn != 0) {
        let a = ['S', 'W', 'G'];
        let computer_choose = a[Math.floor(Math.random() * a.length)];
        let choice = prompt("Enter any one from S,W,G:");
        let user_choice=choice.toLocaleUpperCase();
        if (computer_choose == user_choice) {
                console.log("DRAW.")
        }
        else if ((computer_choose == 'W' && user_choice == 'S') ||
                (computer_choose == 'S' && user_choice == 'G') ||
                (computer_choose == 'G' && user_choice == 'W')) {
                console.log("WIN")
          Score++;
        }
        else {
                console.log("LOSE")
        }
        turn = turn - 1;
}
console.log("Your Score is:",Score)