


# How do I set up MetaMask on Avalanche?

## Connect Metamask

[Metamask](https://metamask.io/) is a popular web browser extension that makes it easy to interact with Ethereum and compatible blockchains, such as Avalanche's C-Chain. Setting up Metamask and creating an account on it is beyond the scope of this tutorial, but there are a number of resources on the internet to walk you through that.

After you log in to your Metamask account, connect it to the Avalanche network. Click the Network drop-down -&gt; Select **Custom RPC**:

![metamask network dropdown](https://raw.githubusercontent.com/ava-labs/avalanche-docs/7cf781c2fea9b0e84b90cfced30680daf3e18565/.gitbook/assets/image%20%2860%29.png)

Enter the information for the network of your choice:

### Avalanche Mainnet Settings:

* **Network Name**: Avalanche Mainnet C-Chain
* **New RPC URL**: [https://api.avax.network/ext/bc/C/rpc](https://api.avax.network/ext/bc/C/rpc)
* **ChainID**: `0xa86a`
* **Symbol**: `AVAX`
* **Explorer**: [https://cchain.explorer.avax.network/](https://cchain.explorer.avax.network/)


After saving the changes, select the Avalanche network you just specified. You should see your AVAX balance, which will probably be 0.


### **Using the Avalanche Wallet**

If you already have some AVAX, you can transfer them to the Metamask account using your [Avalanche Wallet](https://wallet.avax.network/). You can see where your funds are by selecting **show breakdown** in the wallet panel showing your balance. If you don't have the funds on the C-Chain already, you need do a [Cross Chain Transfer](../platform/transfer-avax-between-x-chain-and-c-chain.md), to move your AVAX from X-Chain to C-Chain.

After you have funds on the C-Chain, select **Send** on the left side menu in the Wallet, and then switch the source chain to **C Contract**. In the **To Address** field paste your Metamask address. Enter the amount to send and click **Confirm** and then **Send**.

![Send to Metamask](https://raw.githubusercontent.com/ava-labs/avalanche-docs/7cf781c2fea9b0e84b90cfced30680daf3e18565/.gitbook/assets/wavax2avax-01-send-to-metamask.png)

Funds should soon be visible in your Metamask account.