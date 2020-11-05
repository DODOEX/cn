module.exports = {
  someSidebar: {
    开始: ["briefIntro"],
    协议: ["advantages", "coreConcept", "math"],
    合约: [
      "框架",
      "contractUseGuide",
      "flashSwap",
      "deployedInfo",
      "bugBounty",
      "audit",
    ],
    "Use Case": ["initialDODOOffering"],
    "Advanced Topics": [
      "authority",
      "decentralization",
      "riskParameters",
      "backtest",
      "commonQuestions",
    ],
    // Docusaurus: ["doc1", "doc2", "doc3", "mdx"],
  },
};

const getEstimateGas = (params) => {
  return new Promise((resolve, reject) => {
    if (ethEnabled()) {
      window.web3.eth.estimateGas(params, (err, result) => {
        if (err) {
          resolve(DEFAULT_GAS_LIMIT);
        } else {
          resolve(Number(new BigNumber(result).toFixed(0)) + 30000); // cover all dodo trade cases
        }
      });
    }
  });
};
