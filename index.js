
var v = require('vector')

// position

var pos = module.exports = {}

pos.pos = [v, 0,0]
pos.prevPos = [v, 0,0]
pos.offset = [v, 0,0]

pos.update = function (e) {
  e.prevPos.set(e.pos)
}
