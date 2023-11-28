import React from 'react'
import p1 from "../../assets/p-1.png"
import p2 from "../../assets/p2.png"
import p3 from "../../assets/p3.png"

import g1 from "../../assets/g-1.png"
import g2 from "../../assets/g-2.png"
import g3 from "../../assets/g3.png"

import tm1 from "../../assets/tm1.png"
import tm2 from "../../assets/tm2.png"
import tm3 from "../../assets/tm3.png"
import frame from "../../assets/Frame.png"

import trading from "../../assets/trading.png"
import trad2 from "../../assets/trad2.png"

import offer from "../../assets/25per.png"
import user from "../../assets/user.png"
import "./Main.css";
const Main = () => {
  return (
    <div className='min-h-screen relative pt-28 m-auto'>
      <div className='flex flex-col justify-center items-center gap-8'>
        <div className='max-w-xl text-center'>
          <h1 className='text-white text-7xl font-semibold mb-3'>It's time to trade, the <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-400 to-yellow-400">future</span></h1>
          <p className='text-lg'>Trade BTC, ETH Futures with 125x leverage and earn rewards.</p>
        </div>
        <div className='phonebg flex'>
          <div className='my-auto -mr-12'><img className='w-full' src={p2} /></div>
          <div className='z-10'><img className='w-full ' src={p1} /></div>
          <div className='my-auto -ml-12'><img className='w-full' src={p3} /></div>
        </div>
      </div>


      <div className='p-5 flex justify-around m-auto gap-4 shadow-stone-700 bg-black shadow-lg w-11/12 my-20  rounded-lg text-center'>
        <div className='flex flex-col items-center p-2 '>
          <p className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-400 to-yellow-400'>00%</p>
          <p>Conversion Fee</p>
        </div>
        <div className='bg-gradient-to-r from-green-400 via-lime-400 to-yellow-400 w-0.5  my-3 '></div>
        <div className='flex flex-col items-center p-2'>
          <p className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-400 to-yellow-400'>$500 Mn+</p>
          <p>Lifetime Volume Traded</p>
        </div>
        <div className='bg-gradient-to-r from-green-400 via-lime-400 to-yellow-400 w-0.5  my-3 '></div>
        <div className='flex flex-col items-center p-2'>
          <p className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-400 to-yellow-400'>250+</p>
          <p>Total Tradable Pairs</p>
        </div>
        <div className='bg-gradient-to-r from-green-400 via-lime-400 to-yellow-400 w-0.5  my-3 '></div>
        <div className='flex flex-col items-center p-2'>
          <p className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-400 to-yellow-400'>15,000+</p>
          <p>Traders on Platform</p>
        </div>
      </div>


      <div className='flex flex-col justify-center items-center gap-20 my-20'>
        <div className='m-auto'><img src={g1} /></div>
        <div><img src={g2} /></div>
        <div><img src={g3} /></div>
      </div>

      <div className='my-40 flex flex-col justify-center items-center'>
        <div className='max-w-xl text-center'>
          <h1 className='text-white text-7xl font-semibold mb-3'>Trade More.<span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-400 to-yellow-400">Pay Less.</span></h1>
          <p className='text-lg'>Our low Fees SuperCharge Your Profits</p>
        </div>
        <div className='flex my-10 justify-center items-center gap-1'>
          <div className='relative p-2 bg-gray-800 w-40 h-52 items-center flex flex-col gap-6 justify-center text-center'>
            <img src={frame} className='w-1/2 absolute top-0 left-0 w-3/4' />
            <img src={tm1} className='w-20' />
            <div><p className='font-bold'>0.025</p>
              <p className='text-xs font-light'>Maker Fees</p>
            </div>
            <div>
              <p className='font-bold'>0.07</p>
              <p className='text-xs font-light'>Taker Fees</p>
            </div>
          </div>
          <div className='text-black relative p-2 bg-gradient-to-b from-lime-400 via-green-500 to-green-600 w-40 h-52 items-center flex flex-col gap-6 justify-center text-center shadow-sm shadow-lime-400'>
            <img src={frame} className='w-1/2 absolute top-0 left-0 w-3/4' />
            <img src={tm2} className='w-20' />
            <div><p className='font-bold'>0.02</p>
              <p className='text-xs font-light'>Maker Fees</p>
            </div>
            <div>
              <p className='font-bold'>0.04</p>
              <p className='text-xs font-light'>Taker Fees</p>
            </div>
          </div>
          <div className='relative p-2 bg-gray-800 w-40 h-52 items-center flex flex-col gap-6 justify-center text-center'>
            <img src={frame} className='w-1/2 absolute top-0 left-0 w-3/4' />
            <img src={tm3} className='w-20' />
            <div><p className='font-bold'>0.02</p>
              <p className='text-xs font-light'>Maker Fees</p>
            </div>
            <div>
              <p className='font-bold'>0.05</p>
              <p className='text-xs font-light'>Taker Fees</p>
            </div>
          </div>
        </div>
      </div>




      <div className='flex flex-col justify-center items-center mb-10'>
        <div className='max-w-xl text-center'>
          <h1 className='text-white text-7xl font-semibold mb-3'>Explore the Markets like it is your <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-400 to-yellow-400">Playground.</span></h1>
          <p className='text-lg'>Search for your favorite coins and stay ahead of the market</p>
        </div>

        <div className='my-10'><img src={trading} alt="trading" /></div>
        <div className='bg-gradient-to-b from-lime-400 via-lime-500 to-green-600 items-center text-center shadow-sm shadow-lime-400 py-1 text-xs px-8 rounded-lg text-black font-bold'>EXPLORE MARKETS</div>
      </div>


      <div className='flex flex-col justify-center items-center mb-10'>
        <div className='max-w-xl text-center'>
          <h1 className='text-white text-7xl font-semibold mb-3'><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-lime-400 to-yellow-400">Unlock </span> New Frontiers. </h1>
          <p className='text-lg'>Are you a stock trader looking for new opportunities to make money? We got you covered!</p>
        </div>


        <div className='p-5 flex justify-around m-auto gap-4 shadow-stone-700 bg-black shadow-lg w-11/12 my-20  rounded-lg text-center'>

          <p className='p-3'>Conversion Fee</p>

          <div className='bg-white  w-0.5  my-3 '></div>
          <p className='p-3'>Same Indicators</p>
          <div className='bg-white w-0.5 my-3 '></div>
          <p className='p-3'>Better Leverage</p>
          <div className='bg-white w-0.5  my-3 '></div>
          <p className='p-3'>24x7 Trading</p>
        </div>

        <div>
          <img src={trad2} />
        </div>
      </div>


      <div className='flex flex-col justify-center items-center py-14 bg-white text-black'>
        <div className='max-w-2xl text-center'>
          <h1 className='text-white text-6xl font-semibold mb-3 text-black'>Start Small. Earn Big.</h1>
          <p className='text-lg'>Deposity a minimum of 1000 and get a Deposit bonus + dedicagted relationship manager</p>
        </div>

        <div className='flex gap-1 mt-20'>
          <div className='p-10 max-w-lg bg-slate-300 text-black flex flex-col justify-between' >
            <div>
              <img src={offer} />
            </div>
            <p className='font-bold text-3xl'>Deposit Bonus.</p>
            <p className='text-xs text-slate-600'>Our assets' liquidity is unmatched in the market, with a small bid-ask spread and a well-balanced order book.</p>
          </div>
          <div className='p-10 max-w-lg bg-slate-300 text-black flex flex-col justify-between'>
            <div>
              <img src={user} />
            </div>
            <p className='font-bold text-3xl'>Dedicated
              Relationship Manager.</p>
            <p className='text-xs text-slate-600'>Our assets' liquidity is unmatched in the market, with a small bid-ask spread and a well-balanced order book.</p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Main