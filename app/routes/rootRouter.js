'use strict';

const Router = require('koa-router');
const getRoute = require('../deps/getRoute');
let router = new Router();
router.get('/', async (ctx, next) => {
	//setTimeout(function(){throw new Error('timeout')},0);
	//setImmediate(function(){throw new Error('setimm')})
	ctx.status = 404
	throw new Error('look me at <a href="//github.com/xtx1130" target="_blank">xtx1130</a>')
})
router.post('/', async (ctx, next) => {
	ctx.status = 404
	throw new Error('look me at <a href="//github.com/xtx1130" target="_blank">xtx1130</a>')
})
module.exports = router;