
import styles from './generalButton.module.css';
import { useWeb3Modal } from "@web3modal/react";
import { useState } from "react";
import { useAccount, useDisconnect, useBalance } from "wagmi";


const GeneralButton = (props) => {
    const [loading, setLoading] = useState(false);
    const { open } = useWeb3Modal();
    const { address, isConnected } = useAccount();
    const { disconnect } = useDisconnect();
    
    const label = isConnected ? "Disconnect" : "Connect Custom";
    
  
    async function onOpen() {
        setLoading(true);
        await open();
        setLoading(false);
    }

    function onClick() {
        if (isConnected) {
            disconnect();
        } else {
            onOpen();
        }
    }
    
    return <button onClick={onClick} disabled={loading} className={styles.buttonBackground}>
        <span className={styles.buttonContext}>{loading ? "Loading..." : label}</span>
    </button>
   
}
export default GeneralButton;