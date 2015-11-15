module.exports = function flat (target) {
  // when accept string
  if (typeof target === 'string') return [target]

  // when accept array
  if (Array.isArray(target)) {
    var result = []

    var len = target.length
    for (var i = 0; i < len; i++) {
      result = result.concat(flat(target[i]))
    }

    return result
  }

  //when accept object
  if (target && Array.isArray(target.items)) {
    var prefix = target.prefix
    var postfix = target.postfix
    return flat(target.items).map(function(elem) {
      if (prefix) elem = prefix + elem
      if (postfix) elem = elem + postfix
      return elem
    })
  }

  //or panic
  throw new Error('invalid parameter for flat-string: ' +
    JSON.stringify(target, null, 2))
}
