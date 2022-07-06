import { ethers } from "ethers";
import React, { useEffect, useState } from "react";
import { contractABI, contractAddress } from '../utlis/constants';


export const TransactionContext = React.createContext();

const { ethereum } = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionsContract = new ethers.Contract(contractAddress, contractABI, signer);
   return transactionsContract;
};

export const TransactionsProvider = ({ children }) => {
    const [currentAccount, setCurrentAccount] = useState("");
    const [formData, setformData] = useState({addressTo:'',amount:'',keyword:'',message:''});
    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));
    const handleChange=(e,name)=>{
        setformData((prevState)=>({...prevState,[name]:e.target.value}));
    }


    const checkIfwallectIsConnected = async () => {
        try {
            if (!ethereum) return alert("Plase install metamesk");

            const accounts = await ethereum.request({ method: 'eth_accounts' });
    
            if (accounts.length) {
                setCurrentAccount(accounts[0]);
    
                //getAllTransactions();
            } else {
                console.log('No accounts found');
            }
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object.")
        }
       
    }

    const connectwallect = async () => {
        try {
            if (!ethereum) return alert("Plase install metamesk");
            const accounts = await ethereum.request({ method: "eth_requestAccounts", });
            setCurrentAccount(accounts[0]);
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object.")
        }
    }

    const sendTransaction= async()=>{
        try {
            if (!ethereum) return alert("Plase install metamesk");
            const { addressTo, amount, keyword, message } = formData;
            const transactionsContract=getEthereumContract();
            const parsedAmount = ethers.utils.parseEther(amount);

            await ethereum.request({
                method: "eth_sendTransaction",
                params: [{
                    from: currentAccount,
                    to: addressTo,
                    gas: "0x5208",
                    value: parsedAmount._hex,
                }],
            });
           const transactionHash=await transactionsContract.addToBlockchain(addressTo,parsedAmount,message,keyword);
            setIsLoading(true);
            console.log(`Loading - ${transactionHash.hash}`);
            await transactionHash.wait();
            console.log(`Success - ${transactionHash.hash}`);
            setIsLoading(false);
            setTransactionCount(transactionCount.toNumber());
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object.")
        }
    }

    useEffect(() => {
        checkIfwallectIsConnected();
    }, []);

    return (
        <TransactionContext.Provider value={{ connectwallect,currentAccount,formData,setformData,handleChange,sendTransaction }}>
            {children}
        </TransactionContext.Provider>
    );
};