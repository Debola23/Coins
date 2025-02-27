import axios from 'axios'
import { useEffect, useState } from 'react'
import { Footer } from '../Footer/Footer'
import { Navv } from '../Navbar/Navv'

import Styles from'./Coins.module.css'

export const Coins = () => {
  const [search, setSearch] = useState("")
  const [currency, setCurrency] = useState([])


  useEffect(() => {
    console.log("API Key:", import.meta.env.VITE_COIN_API_KEY); // Debugging

    axios.get('https://openapiv1.coinstats.app/coins?', {
        headers: { 'X-API-KEY': import.meta.env.VITE_COIN_API_KEY }
    })
    .then(res => setCurrency(res.data.result))
    .catch(err => console.log(err));
}, []);


  return (
    <>
     <div className={Styles.coins}>
        <Navv/>
        <div className={Styles.info}>
           
        </div>
        <section className={Styles.coinBox}>
          <div>
            <h3 className={Styles.cHead}>Coins</h3>
            <p>Access over 300+ coins availabe for you</p>
            <input type="text" placeholder='Search coins...' className={Styles.search} onChange={(e) => setSearch(e.target.value)}/>
          </div>
          <div className={Styles.tableContainer}>
            <table className={Styles.table}>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Symbol</th>
                  <th>Market Cap</th>
                  <th>Price</th>
                  <th>Available Supply</th>
                  <th>Volume (24hr)</th>
                </tr>
              </thead>
              <tbody>
                {currency
                  .filter((val) => val.name.toLowerCase().includes(search.toLowerCase()))
                  .map((val) => {
                    return (
                      <tr key={val.id} className={Styles.tr}>
                        <td className={Styles.rank}>{val.rank}</td>
                        <td className={Styles.coinLogo}>
                          <a href={val.websiteUrl} target="_blank" rel="noreferrer">
                            <img src={val.icon} alt="" />
                          </a>
                          <p>{val.name}</p>
                        </td>
                        <td className={Styles.symbol}>{val.symbol}</td>
                        <td>${val.marketCap}</td>
                        <td>${val.price.toFixed(2)}</td>
                        <td>{val.availableSupply}</td>
                        <td>{val.volume.toFixed(0)}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </section>
   
        <Footer/>
    </div>
    </>
  )
}
