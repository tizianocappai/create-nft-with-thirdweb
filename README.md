# Create NFT with JS & Thirdweb

this is a step by step guide on how to create an **NFT** using javascript from scratch

### Built With

This are all the things that we need:

- [Node](https://nodejs.org/)
- [Npm](https://www.npmjs.com/)
- [Alchemy](https://www.alchemy.com/)
- [Metamask](https://metamask.io/)
- [Faucet Rinkeby](https://faucet.rinkeby.io/)
- [Thirdweb](https://hardhat.org/)


## First Step: Set Up
Before we start, we need to create a `MetaMask` wallet. Since we'll be deploying our contracts on the `Rinkeby` network, we'll also need some ETH to approve the transactions. [Here's a guide on how to create a MetaMask Wallet and get testnet ETH](https://thirdweb.com/portal/guides/create-a-metamask-wallet).

Then [Alchemy](https://www.alchemy.com/) help us create our NFT.  
Navigate to the website and register your account.  
Navigate to the Alchemy dashboard where you’ll see a screen titled “Create your first app”.  
Select **Rinkeby** as the test network for the application.

## Clone Repo

First you need to clone this repo `https://github.com/tizianocappai/create-nft-with-thirdweb.git` .

Then run
```sh  
npm install  
```  

## The Files

In this project you will find 3 javascript files that allow us to create our NFT.
- `init-sdk.js`
- `deploy-collection.js`
- `mint-nft.js`

**init-sdk.js** in this file we re importing thirdweb, initializing our SDK the we export it.

**deploy-collection.js** this file allow us to deploy our NFT module.

**mint-nft.js** with this file we mint our NFT.

## .Env file

I suggest you to create in the root a .env file that allow you to store your sensible data. you will find an example one in the root.

**METAMASK_PRIVATE_KEY** Your Metamask private key.

**METAMASK_PUBLIC_KEY** Your Metamask public key.

**APP_ADDRESS** this value will be generated in your console then you need to copy ion .env file.

**WALLET_ADDRESS** Your Metamask Wallet Address.

**NFT_MODULE_ADDRESS**  this value will be generated in your console then you need to copy ion .env file.

**API_URL** You can find this value in Alchemy dashboard, in the section INTEGRATE WITH ALCHEMY you can find http field then you can copy the value and paste in this variable.



## Init our SDK

Go in the console in the root of this project and do

```sh  
node scripts/init-sdk.js
```  

You will get a message like
``
Your app address is: 0x25320e23DCd1813D11787aD836865a64CC69897A
``

This Value is the one that you have to copy in your **APP_ADDRESS**

## Deploy Collection

Go in deploy-collection.js file and set all the data for your collection
(you will find an example).

REMEMBER that if you change the image field you need to upload in the assets folder you image that you want to become NFT.

Then Go in the console in the root of this project and do

```sh  
node scripts/deploy-collection.js
```  

You will get a message like
```
✅ Successfully deployed nft module, address: 0x1C267DC8841999de9B9C4F33D63a8d6bC81b8e2D
```

This value is the one that you have to copy in **NFT_MODULE_ADDRESS**

## Mint Nft

It's time to create your NFT.

Go in mint-nft.js file and set all the data for your NFT
(you will find an example).

Then if you're ready run this command in the root.
```sh  
node scripts/mint-nft.js  
```  

If you do all this step you will see a message like:
```
✅ Successfully created a new NFT in the collection!
```

You can now view the NFT on your thirdweb [dashboard](https://thirdweb.com/rinkeby/).

## Adding our NFT to our MetaMask wallet

1. Check connection to the Rinkeby Test Network
2. Open MetaMask wallet extension
3. Click the  **add token** button
4. Copy the contract address of your new token and paste it into MetaMask. MetaMask will automatically generate the token’s symbol.
5. Click  **next** to add the token to your wallet

([back to top](https://github.com/tizianocappai/create-nft-with-js#top))

## Adding our NFT to our MetaMask wallet (Mobile Version)

1. Download the Metamask app and log in
2. At the top select Rinkeby Test Network
3. Click  **NFTs** button
4. Click  **Import NFTs** button
5. Copy the contract address of your new token and paste it into MetaMask.
6. Go to Thirdweb dashboard then you will find the ID of your NFT, copy and paste into Metamask.
7. Click  **Import **  to add your NFT to your wallet

([back to top](https://github.com/tizianocappai/create-nft-with-js#top))