"use client";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { useWeb3Transfer } from "react-moralis";
import React from "react";
//import { createAlchemyWeb3 } from "@alch/alchemy-web3";
// import transferNFT from './mint-nft';
import {} from 'dotenv/config' ;
require("dotenv").config();
const API_URL = process.env.API_URL;

const PUBLIC_KEY = process.env.PUBLIC_KEY;
// const PRIVATE_KEY1 = process.env.PRIVATE_KEY;
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const {ethers, JsonRpcProvider} = require('ethers');
 const contract = require("../../artifacts/contracts/MyNFT.sol/MyNFT.json");

const contractAddress="0x12a74Cc9Acae03e136C826606e08cf00dC9C07e2";


/*async function TransferNFT(_tokenId,_receiver){
  const { fetch, error, isFetching } = useWeb3Transfer({
    type: "erc721",
    receiver:_receiver,
    contractAddress: "0x01DF690E42e621Bf79E78D952C38e16bc3B497b7",
    tokenId: _tokenId,
  });
  
  await TransferNFT(_tokenId, _receiver);
}*/
// Replace tokenId and toAddress with actual values
// export default transferNFT(tokenId, toAddress);
/*async function transferNFT(tokenId, toAddress) {
  const provider = new ethers.providers.JsonRpcProvider(API_URL);
  const wallet = new ethers.Wallet("72b86e2a77b592225cee45b7a08a850dc8fbf91564628d98d7a5a71acc96d62a", provider);
  
  const contract = new ethers.Contract("0x01DF690E42e621Bf79E78D952C38e16bc3B497b7", wallet);

  try {
      const tx = await contract.transferNFT(toAddress, tokenId); // Adjust function name as per your contract
      await tx.wait();
      console.log('NFT transferred successfully');
  } catch (error) {
      console.error('Error transferring NFT:', error);
  }
}*/



function walletPrompt(){
  var newVal = prompt("Enter wallet address");
    if(newVal === "")
    {
      walletPrompt();
    }else if(newVal){
      alert("Address received");
    }else{
      walletPrompt();
    }
}


export default function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      id="revButton"
      type="submit"
      disabled={pending}
    //   onClick={()=> {if (!prompt("Enter wallet address"))
    // {
    //   walletPrompt()
    // }}}
    onClick={()=> {
      // let t = document.getElementById("text")?.innerHTML;
      // if(t==="")
      // {
      //   alert("Please enter your review");
      // }
      var newVal = prompt("Enter wallet address");
    if(newVal === "")
    {
      walletPrompt();
    }else if(newVal && newVal.length==42){
      alert("Address received");
      //TransferNFT(1,newVal);
      
    }else{
      walletPrompt();
    }}}
    // onClick={walletPrompt()}
      
      className="bg-teal-500 hover:bg-teal-700 px-4 py-2 rounded-lg text-white">
      {pending ? <>loading...</> : <>Add comment...</>}
    </button>
    
  );
}
