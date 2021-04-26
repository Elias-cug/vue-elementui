import { isNil } from 'lodash'

/**
 * @author liyish
 * @param { Object } ele 要计算的 dom 元素
 * @returns {Object}
 */
export function getDomSize (ele) {
  let strWidth = ''
  let strHeight = ''
  if (isNil(ele)) {
    console.error('未传入dom元素')
    return false
  }
  if (window.getComputedStyle) {
    strWidth = window.getComputedStyle(ele, null)['width']
    strHeight = window.getComputedStyle(ele, null)['height']
  } else {
    strWidth = ele.currentStyle['width']
    strHeight = ele.currentStyle['height']
  }
  return {
    width: Number(strWidth.substring(0, strWidth.length - 2)),
    height: Number(strHeight.substring(0, strHeight.length - 2))
  }
}

/**
 * 防抖函数
 */
export function debounce (fn, wait) {
  let timer = null
  const context = this
  const args = arguments
  return function () {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(function () {
      fn.apply(context, args)
      timer = null
    }, wait)
  }
}
