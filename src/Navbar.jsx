import React from 'react'


const Navbar = ({accounts, setAccounts}) => {
    const isConnected = Boolean(accounts[0])

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            })
            setAccounts(accounts)
        }
    }
  return (
    <>
    <div className='flex justify-around font-Crisis py-10'>
    {/* left side social media */}
    <div className='flex justify-between mx-10'>
    <div className='mx-4'>Facebook</div>
    <div className='mx-4'>Twitter</div>
    <div className='mx-4'>Email</div>
    </div>

    {/* Right side sections and connect */}
    <div className='flex mx-20'>
    <div className='mx-4'>About</div>
    <div className='mx-4'>Mint</div>
    <div className='mx-4'>Team</div>
    </div>

   
    </div>
     {/* connect */}
     {isConnected ? (
      <p className='border-black p-2 border-2 rounded-lg'>Connected</p>
    ): (<button onClick={connectAccount} className='border-black p-2 border-2 rounded-lg'>Connect</button>)}
    </>
  )
}

export default Navbar