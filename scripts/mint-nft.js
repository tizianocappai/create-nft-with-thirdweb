import sdk from '../init-sdk.js';
import { readFileSync } from 'fs';

const { NFT_MODULE_ADDRESS } = process.env;

const nft = sdk.getNFTModule(NFT_MODULE_ADDRESS);

(async () => {
    try {
        await nft.mint({
            name: 'Dev Tiz #1',
            description: 'develop some bugs again',
            image: readFileSync('assets/DevTiz.jpg'),
            properties: {},
        });
        console.log('✅ Successfully created a new NFT in the collection!');
    } catch (error) {
        console.error('failed to create the new NFT', error);
    }
})();