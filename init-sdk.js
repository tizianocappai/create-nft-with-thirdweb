import { ThirdwebSDK } from '@3rdweb/sdk';
import ethers from 'ethers';

import dotenv from 'dotenv';
dotenv.config();

const { API_URL } = process.env;

const sdk = new ThirdwebSDK(
    new ethers.Wallet(
        // Your wallet private key. ALWAYS KEEP THIS PRIVATE, DO NOT SHARE IT WITH ANYONE.
        // Add it to your .env file and do not commit that file to github!
        process.env.METAMASK_PRIVATE_KEY,
        // RPC URL, we'll use our Alchemy API URL from our .env file.
        ethers.getDefaultProvider(API_URL)
    )
);

(async () => {
    try {
        const apps = await sdk.getApps();
        console.log('Your app address is:', apps[0].address);
    } catch (err) {
        console.error('Failed to get apps from the sdk', err);
        process.exit(1);
    }
})();

// We are exporting the initialised thirdweb SDK so that we can use it in our other scripts
export default sdk;