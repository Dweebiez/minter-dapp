require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Dweebiez Milliard";
const description = "11574 Dweebies From Planet Dwee They Launched on Monday 30 July 1990 23:03. Landed on The Earth On 07 April 2022 23.03 +2UCT After One Billion Seconds Metarstellar Travel. Neurodivergents Minds & Hearts Full of Love They Celebrate their arrival By Helping Humans With thier Super Minds.";
const baseUri = "ipfs://NewUriToReplace";

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [{
    growEditionSizeTo: 10,
    layersOrder: [
        { name: "Background" },
        { name: "BackItems" },
        { name: "Horns" },
        { name: "Body" },
        { name: "Skin" },
        { name: "Rings" },
        { name: "Powers" },
        { name: "Shoes" },
        { name: "Eyes" },
        { name: "Beards" },
        { name: "Hair" },
        { name: "Glasses" },
        { name: "Hats" },
        { name: "Items" },
        { name: "Mouth" },
    ],
}, ];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
    width: 2335,
    height: 2486,
    smoothing: true,
};

const extraMetadata = {
    external_url: "https://twitter.com/DweebieProject", // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 2; // Your API key rate limit
const CHAIN = 'polygon'; // only rinkeby or polygon

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'Dweebie Milliard';
const CONTRACT_SYMBOL = 'DWEEBZM';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0x9E5B8F509351334457C66334e4e1F07Cb34686c9';
const TREASURY_ADDRESS = '0x9E5B8F509351334457C66334e4e1F07Cb34686c9';
const MAX_SUPPLY = 11574; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 7; // Minting price per NFT. Rinkeby = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 12; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-04-08T00:49:00+02:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = "2022-04-02T00:03:00+02:00"; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 1000; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0x985F17545d623202247ccb555AB47443BdF41Ac8"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = ["0x9E5B8F509351334457C66334e4e1F07Cb34686c9,0x72659D23D698AFa71B222Ad5f3FdD80282C7274f"]; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = "YOUR CONTRACT ADDRESS"; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = true; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "Celebrating a billion seconds, From Planet Dwee! Which Dweebie will you wellcome after One billon seconds Meterstellar journey"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/bafybeibcchk23nhchsablg5z6xh6357sgxjyuen27sk7kqnju2qv3nso6y"; // Replace with your generic image that will display for all NFTs pre-reveal.

// Automatically set contract address if deployed using the deployContract.js script
try {
    const rawContractData = fs.readFileSync(
        `${basePath}/build/contract/_contract.json`
    );
    const contractData = JSON.parse(rawContractData);
    if (contractData.response === "OK" && contractData.error === null) {
        CONTRACT_ADDRESS = contractData.contract_address;
    }
} catch (error) {
    // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
    symbol: "DWEEBZ",
    seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
    external_url: "https://twitter.com/DweebieProject",
    creators: [{
        address: "0x9E5B8F509351334457C66334e4e1F07Cb34686c9",
        share: 100,
    }, ],
};

const gif = {
    export: false,
    repeat: 0,
    quality: 100,
    delay: 500,
};

const text = {
    only: false,
    color: "#ffffff",
    size: 20,
    xGap: 40,
    yGap: 40,
    align: "left",
    baseline: "top",
    weight: "regular",
    family: "Courier",
    spacer: " => ",
};

const pixelFormat = {
    ratio: 2 / 128,
};

const background = {
    generate: true,
    brightness: "80%",
    static: false,
    default: "#000000",
};


const rarityDelimiter = "#";

const uniqueDnaTorrance = 12000;

const preview = {
    thumbPerRow: 5,
    thumbWidth: 50,
    imageRatio: format.height / format.width,
    imageName: "preview.png",
};

const preview_gif = {
    numberOfImages: 5,
    order: "ASC", // ASC, DESC, MIXED
    repeat: 0,
    quality: 100,
    delay: 500,
    imageName: "preview.gif",
};

module.exports = {
    format,
    baseUri,
    description,
    background,
    uniqueDnaTorrance,
    layerConfigurations,
    rarityDelimiter,
    preview,
    shuffleLayerConfigurations,
    debugLogs,
    extraMetadata,
    pixelFormat,
    text,
    namePrefix,
    network,
    solanaMetadata,
    gif,
    preview_gif,
    AUTH,
    LIMIT,
    CONTRACT_ADDRESS,
    OWNER_ADDRESS,
    TREASURY_ADDRESS,
    CHAIN,
    GENERIC,
    GENERIC_TITLE,
    GENERIC_DESCRIPTION,
    GENERIC_IMAGE,
    CONTRACT_NAME,
    CONTRACT_SYMBOL,
    METADATA_UPDATABLE,
    ROYALTY_SHARE,
    ROYALTY_ADDRESS,
    MAX_SUPPLY,
    MINT_PRICE,
    TOKENS_PER_MINT,
    PRESALE_MINT_START_DATE,
    PUBLIC_MINT_START_DATE,
    BASE_URI,
    PREREVEAL_TOKEN_URI,
    PRESALE_WHITELISTED_ADDRESSES
};