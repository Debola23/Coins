import Styles from "./Hero.module.css";
import Button from 'react-bootstrap/Button';

export const Hero = () => {
  return (
    <div className={Styles.hero}>
      <div className={Styles.hInfo}>
        <h1>Crypto taxes</h1>
        <p className={Styles.p}>done right</p>
        <p className={Styles.pp}>
          Connect your crypto wallets and exchanges to get
            <br/>
          your optimized tax report in minutes.
        </p>
        <Button variant="warning" className={Styles.btn}>Get started for free</Button>
      </div>
    </div>
  )
}
