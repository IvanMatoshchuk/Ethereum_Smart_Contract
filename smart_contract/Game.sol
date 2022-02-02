pragma solidity ^0.4.17;
contract GuessingGame {
    address constant public casinoAddress = 0x12d9F1eC6f6c9F722B110487642e8dEa73B6c35e;


    function enterGame() external payable{
        require(msg.value >= 0.001 ether);
    }

    function fundsToCasino() external {
        casinoAddress.transfer(address(this).balance);
    }
}