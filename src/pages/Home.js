import { Outlet, Link } from "react-router-dom";
import styles from './home.module.css';
import cn from "classnames";
import BalancePanel from "../components/balancePanel";
import GeneralButton from "../components/generalButton";
import CustomButton from "../components/customButton";



const Home = () => {
  return (
    <div className={cn(styles.home)}>
    
        <div className={styles.balanceComponent}>
            <div><BalancePanel/></div>
            
            <div>
              <GeneralButton/>
              
            </div>

        </div>
        <div className={styles.main}>
            <div className={styles.side}>
              <div className={styles.subtitle}>
                Buy USDH
              </div>
              <div className={styles.subMain}>
                <div>
                  <span className={styles.dollarSymbol}>$</span>
                  <input type="text" className={styles.inputAmount}/>
                </div>
                <div>
                  <CustomButton content="Buy Token" />
                </div>
              </div>
            </div>
            <div className={styles.side}>
            <div className={styles.subtitle}>
                Withdraw USDH
              </div>
              <div className={styles.subMain}>
                <div>
                  <span className={styles.dollarSymbol}>$</span>
                  <input type="text" className={styles.inputAmount}/>
                </div>
                <div>
                  <CustomButton content="Withdraw Token" />
                </div>
              </div>
            </div>
        </div>
    </div>
  )
};

export default Home;