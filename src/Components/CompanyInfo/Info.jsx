
import { Chart2 } from "../Chart/Chart2";
import Styles from "./Info.module.css"
import Button from 'react-bootstrap/Button';

export const Info = () => {
  return (
    <>
    <div className={Styles.info}>
        <h1>Powerful Integration</h1>
        <Chart2/>
        <p className={Styles.infoP}>
        CoinTracker supports 500+ exchanges & wallets,<br/>
        NFTs, 10,000+ cryptocurrencies, and 20,000+<br/>
        DeFi smart contracts. <a href=""className={Styles.infoA}>See all integrations.</a>
        </p>
    </div>
    <div className={Styles.sec}>
        <h1>Buletproof Security</h1>
        <ul className={Styles.secUl}>
            <li className={Styles.secLi}>
                <img src="/Images/private.png" alt="" className={Styles.secimg}/>
                <div className={Styles.secD}>
                    Read-only access to your data
                </div>
            </li>
            <li className={Styles.secLi}>
                <img src="/Images/approved.png" alt="" className={Styles.secimg}/>
                <div className={Styles.secD}>
                    End-to-end encryption and token-based 2FA
                </div>
            </li>
            <li className={Styles.secLi}>
                <img src="/Images/locked.png" alt="" className={Styles.secimg}/>
                <div className={Styles.secD}>
                    Certified SOC 1 and SOC 2 compliant
                </div>
            </li>
        </ul>
    </div>
    <div className={Styles.year}>
        <h1>
            Year round value
        </h1>
        <div className={Styles.chartHolder}>
            <div className={Styles.cont}>
                <img src="/Images/chart1.png" alt="chart" className={Styles.chart1}/>
            </div>
             
        </div>
    </div>
    <div className={Styles.outro}>
        <h2>Backed by $100M from the best in the industry</h2>
        <h3>Users <span>LOVE</span> Coins</h3>
        <Button variant="warning" className={Styles.btn}>Get started for free</Button>
    </div>
    </>

  )
}
