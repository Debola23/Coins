import Styles from './Partner.module.css'

export const Partner = () => {
  return (
    <>
       <div className={Styles.partner}>
        The official crypto tax partner of
        <section id="brand" className="container">
        <div className="row m-0" id={Styles.row}>
          <img src="./Images/bitcoin.png" className="img-fluid col-lg-2 col-md-4 col-6" id={Styles.brandimg} alt=""/>
          <img src="./Images/ethereum.png" className="img-fluid col-lg-2 col-md-4 col-6" id={Styles.brandimg} alt=""/>
          <img src="./Images/bnb.png" className="img-fluid col-lg-2 col-md-4 col-6" id={Styles.brandimg} alt=""/>
          <img src="./Images/shiba.png" className="img-fluid col-lg-2 col-md-4 col-6" id={Styles.brandimg} alt=""/>
          <img src="./Images/xrp.png" className="img-fluid col-lg-2 col-md-4 col-6" id={Styles.brandimg} alt=""/>
        </div>
      </section>
        </div>
        <section className={Styles.background}>
            <div className={Styles.container}>
                <img src="/Images/dashboardpic.webp" alt="dashboard" className={Styles.bigpic} />
                <img src="/Images/mobilebackground.webp" alt="dashboard" className={Styles.smallpic}/>
            </div>
        </section>
    </>  
  )
}
