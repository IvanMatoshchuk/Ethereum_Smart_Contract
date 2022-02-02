pragma solidity ^0.4.17;
contract GuessingGame {
    uint coolNumber = 10;

    address constant public myAddress = 0xE0f5206BBD039e7b0592d8918820024e2a7437b9;

    uint status = 0;


    function enterNumber(uint guess) external payable{
        require(msg.value == 0.001 ether);
        if(guess == coolNumber){
            status = 1;
        } else {
            status = 0;
        }
   

    }
    function payout() external{
        require(status==1);
        (msg.sender).transfer(0.003 ether);
    }

}