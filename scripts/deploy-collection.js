import sdk from '../init-sdk.js';
import { readFileSync } from 'fs';

import dotenv from 'dotenv';
dotenv.config();

const { APP_ADDRESS, WALLET_ADDRESS } = process.env;

const app = sdk.getAppModule(APP_ADDRESS);

(async () => {
    try {
        const nftModule = await app.deployNftModule({
            // The collection's name, ex. CryptoPunks
            name: 'Dev Tiz',
            // A description for the collection.
            description:
                'Dev Tiz develop some bugs',
            // The image for the collection that will show up on OpenSea.
            image: readFileSync('assets/DevTiz.jpg'),
            // The amount of royalty collected on all royalties represented as basis points. The default is 0 (no royalties).
            // 1 basis point = 0.01%
            // For example: if this value is 100, then the royalty is 1% of the total sales.
            sellerFeeBasisPoints: 0,
            // The address of the royalty recipient. All royalties will be sent to this address.
            feeRecipient: WALLET_ADDRESS,
            // The symbol for the NFT Collection
            symbol: 'TIZ',
        });

        console.log(
            '✅ Successfully deployed nft module, address:',
            nftModule.address
        );
    } catch (error) {
        console.log('failed to deploy nft module', error);
    }
})();