const documentLoader = (iri)=>{
  throw new Error('Document Loader does not support IRI: ' + iri)
}

module.exports = documentLoader;