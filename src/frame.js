const jsonld = require('jsonld');

const frame = async (document, documentLoader) =>{
  const framed = await jsonld.frame(document, {
    documentLoader,
  });
  return framed;
}

module.exports = frame;