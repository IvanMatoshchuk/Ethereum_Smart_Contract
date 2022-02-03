async function get_balance() {
    const balance = await window.contract.methods.getBalance().call();
}



async function enter_game() {
    funds_to_casino();
    bet = parseInt(document.getElementById("bet_value").value);
    bet = bet*(10**9) //gwei to wei
    const balance = parseInt(get_balance());
    if(balance < bet){ // check if piggybank can payout if player wins
        document.getElementById('balance').textContent = 
            "balance too low, alert casino";
        return;
    }


    const account = await getCurrentAccount(); 
    await window.contract.methods.enterGame().send({ from: account,
        gas: "3000000", value: bet.toString()});
}

async function funds_to_casino(){
    const account = await getCurrentAccount();
    await window.contract.methods.fundsToCasino().send({ from: account,
        gas: "3000000"});
}

            
async function getCurrentAccount() {
    const accounts = await window.web3.eth.getAccounts();
    return accounts[0];	
}


