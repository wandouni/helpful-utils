/*
 * @File: index.js
 * @Author: wandou 
 * @Date: 2018-11-05 17:45:49 
 * @Last Modified by: wandou
 * @Last Modified time: 2018-11-05 17:47:22
 */
var isType = function (type) {
  return function (obj) {
    return Object.prototype.toString.call(obj) === `[object ${type}]`
  }
}
exports.isString = isType('String')

exports.isNumber = isType('Number')

exports.isBoolean = isType('Boolean')

exports.isArray = isType('Array')

exports.isObject = isType('Object')

exports.isFunction = isType('Function')

exports.isNull = isType('Null')

exports.isUndefined = isType('Undefined')