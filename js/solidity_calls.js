async function loadWeb3() {
    if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        window.ethereum.enable();
    }
}

async function loadContract() {
    return await new window.web3.eth.Contract([
        {
            "constant": false,
            "inputs": [],
            "name": "fundsToCasino",
            "outputs": [],
            "payable": false,
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "constant": false,
            "inputs": [],
            "name": "enterGame",
            "outputs": [],
            "payable": true,
            "stateMutability": "payable",
            "type": "function"
        },
        {
            "constant": true,
            "inputs": [],
            "name": "casinoAddress",
            "outputs": [
                {
                    "name": "",
                    "type": "address"
                }
            ],
            "payable": false,
            "stateMutability": "view",
            "type": "function"
        }
    ], '0xa8fa4013B9f5B8196Ed225A962259d19170D7000');
            }
            


async function load() {
    await loadWeb3();
    window.contract = await loadContract();
}

load();



async function enter_game() {
    const account = await getCurrentAccount();
    bet = parseInt(document.getElementById("bet_value").value);
    bet = bet*(10**9) //gwei to wei
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


