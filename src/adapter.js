


const frame = require('./frame')
const documentLoader = require('./documentLoader')

const frameOperation = (env) =>{
  const parsedDocument = JSON.parse(env.document);
  return frame(parsedDocument, documentLoader)
}

const operation = {
  frame: frameOperation
}

const operationSwitch = async (env) => {
  if (operation[env.operation]){
    return operation[env.operation](env)
  }
 throw new Error('GitHub Action does not support JSON-LD Operation: ' + env.operation)
}

module.exports = { operationSwitch  }