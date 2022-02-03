pragma solidity ^0.4.17;
contract GuessingGame {
    address constant public casinoAddress = 0x12d9F1eC6f6c9F722B110487642e8dEa73B6c35e;

    uint constant initial_ether = 0.01 ether;
    uint constant bet_amount = 0.001 ether;

    function fill_piggybank() external payable {
        require(msg.sender == casinoAddress);
        require(msg.value == initial_ether);
    }

    function getBalance() external view returns(uint) {
        return address(this).balance;
    }

    function enterGame() external payable{
        require(msg.value == bet_amount);
    }

    function fundsToCasino() external {
        // transfer funds to casino if piggybank full
        if(address(this).balance >= 2*initial_ether){
            casinoAddress.transfer(address(this).balance - initial_ether);
        }
    }

    function payout() external {
        // pays out double the bet if player won
        (msg.sender).transfer(bet_amount*2);
    }
}