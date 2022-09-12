const checkID = (id) => {
  if (isNaN(id)) {
    let response = {
      ok: false,
      meta: {
        status: 404
      },
      msg: "Número incorrecto"
    }
    return response
  }
  return false
}


module.exports = {checkID}
