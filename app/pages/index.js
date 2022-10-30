import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import React, { useEffect } from "react";
import CandyMachine from "../components/CandyMachine";

const Home = () => {
    const wallet = useWallet();

    if (wallet && wallet.publicKey) {
        console.log("Phantom wallet found");
        console.log("Public key found: " + wallet.publicKey);
    }

    const renderNotConnectedContainer = () => (
        <div>
            <img src="https://media.giphy.com/media/eSwGh3YK54JKU/giphy.gif" alt="emoji" />

            <div className="button-container">
                <WalletMultiButton className="cta-button connect-wallet-button" />
            </div>
        </div>
    );

    return (
        <div className="App">
            <div className="container">
                <div className="header-container">
                    <p className="header">🍭 Candy Drop</p>
                    <p className="sub-text">NFT drop machine with fair mint</p>
                    {wallet.publicKey ? (
                        <CandyMachine walletAddress={wallet} />
                    ) : (
                        renderNotConnectedContainer()
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
