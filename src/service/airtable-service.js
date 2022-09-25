const createTransaction = async (base, voter, nominee) => {

    base('Voting record').create([
        {
          "fields": {
            "Voter": `@${voter.username}#${voter.discriminator}`,
            "Nominee": `@${nominee.username}#${nominee.discriminator}`
          }
        }
      ], function(err) {
        if (err) {
          console.error(err);
          return;
        }
      });
}

module.exports = {
    createTransaction
}