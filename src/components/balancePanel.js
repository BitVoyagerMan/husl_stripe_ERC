import { useEffect, useState } from 'react';
import styles from './balancePanel.module.css';
import { useBalance, useAccount } from 'wagmi';
const BalancePanel = () => {
    const { address, isConnected } = useAccount();
    const [currentBalance, setCurrentBalance] = useState("XXX");
    const balance = useBalance({
        address: address,
        token: '0x7BAB3781D9A238CdeA4f4925f9322C5a73f9C8cd',
        onSuccess(data) {
            console.log('Success', data.value)
            setCurrentBalance("0")

        },
    })
    useEffect(() => {
        if(!isConnected) setCurrentBalance("XXX");
    })
    
    return <div className={styles.balance_background}>
        <span className={styles.label}><strong>USDH</strong> amount</span>
        <span className={styles.amount}>$&nbsp;<span style={{color: 'white', fontSize:'25px'}}>{currentBalance}</span></span>
        <img src = "/Chart.png" className={styles.chart}/>
    </div>
}
export default BalancePanel;