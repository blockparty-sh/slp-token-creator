let SLPSDK = require("slp-sdk/lib/SLP").default;
let SLP = new SLPSDK({
  restURL: "https://trest.bitcoin.com/v2/"
});

(async function() {
  let token = await SLP.TokenType1.create({
    fundingAddress: 'bitcoincash:qpdg4wtc96zucm6qzvnwwskfu7h4l9wapgmz3jwdm7',
    fundingWif: 'KxW2CYJ78Tf1fJNYZcoKhGuKD4Gf5qsBEFgLpVFMtZJLSDCRkpXD',
    tokenReceiverAddress: '19Fk11eyDcou66eTQ1ovTXJj7BsJTgsfo1',
    batonReceiverAddress:
      'simpleledger:qpdg4wtc96zucm6qzvnwwskfu7h4l9wapghe6fmd9q',
    bchChangeReceiverAddress:
      '19Fk11eyDcou66eTQ1ovTXJj7BsJTgsfo1',
    decimals: 2,
    name: 'Test SLP SDK Token 3',
    symbol: 'TEST3',
    documentUri: 'badger@bitcoin.com',
    documentHash: null,
    initialTokenQty: 1234,
  })
  console.log(token)
})()

