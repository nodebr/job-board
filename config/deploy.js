module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'nodebr-jobs',
      key: process.env.PAGEFRONT_KEY
    }
  };
};
