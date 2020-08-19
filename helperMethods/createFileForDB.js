const createFileForDB = (data) => {
  console.log('createFileForDB running modularly', data)
  const fileObject = {
    type: data.mimetype,
    name: data.originalname,
    data: data.buffer
  }
  console.log('checkout our modularized hleper method doing suff!', fileObject)
  return fileObject
}

module.exports = createFileForDB