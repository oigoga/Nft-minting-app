import React from 'react'
import { useState } from "react";
import { ethers, BigNumber } from "ethers";
import NFTmint from './NFTmint.json'

const NFTmintAddress = "0x30095F54193DC4B629c4805488430Ed7cD4c99a8"

const Mainmint = ({accounts, setAccounts}) => {
    const [mintAmount, setMintAmount] = useState(1)
    const isConnected = Boolean(accounts[0])

    async function handleMint(){
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                NFTmintAddress,
                NFTmint.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.02 *mintAmount).toString()),
                })
                console.log('response:', response)
            } catch(err) {
                console.log("error:", err )
            }
        }
    }
    const handleDecrement  = () => {
        if (mintAmount <= 1) return;
        setMintAmount(mintAmount - 1)
    };

    const handleIncrement = () => {
        if (mintAmount >= 3) return;
        setMintAmount(mintAmount + 1)
    };

  return (
    <div className='flex flex-col items-center py-20'>
        <h1 className='text-4xl underline'>
            My NFT Mint App
        </h1>
        <p className='text-center w-1/2 py-5'>Today is a good day to splash some of your hard earned money on digital art. They say they are NON FUNGIBLE TOKENS</p>
        {isConnected ? (
            <div className='flex flex-col justify-center items-center'>
                <div>
                    <button onClick={handleDecrement} className='mx-2'> - </button>
                    <input type="number" value={mintAmount} className='mx-2 text-center'/>
                    <button onClick={handleIncrement} className='mx-2'> + </button>
                </div>
                <button onClick={handleMint} className='border-black border-2 rounded-md my-4 px-2 '>MINT</button>
            </div>
        ) : (
            <p><span className='uppercase'>NOTE:</span> You must be connected to mint</p>
        )}
    </div>
  )
}

export default Mainmint