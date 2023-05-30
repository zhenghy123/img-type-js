console.log('test.js')
import { imgTypeFromUrl, imgTypeFromFile, imgTypeFromBlob, imgTypeFromBase64, imgTypeFromUint8Array, imgTypeFromArrayBuffer, imgTypeFromBuffer } from './core'

/**
 * 根据path判断类型
 * @param {*} path
 * @returns String
 */
const getPathType = (path) => {
  if (path instanceof File) {
    return 'File'
  }

  if (path instanceof Blob) {
    return 'Blob'
  }

  if (path instanceof Uint8Array) {
    return 'Uint8Array'
  }

  if (path instanceof ArrayBuffer) {
    return 'ArrayBuffer'
  }

  if (path instanceof Buffer) {
    return 'Buffer'
  }

  if (path.indexOf('http') === 0 || path.indexOf('https') === 0) {
    return 'Url'
  }

  if (path.indexOf('data:image') === 0) {
    return 'Base64'
  }

  return 'File'
}

/**
 * @description: 图片类型判断
 * path:String 图片路径
 * path:File 图片文件
 * path:Blob 图片文件
 * path:base64 图片base64
 * path:Uint8Array 图片Uint8Array
 * path:ArrayBuffer 图片ArrayBuffer
 * path:Buffer 图片Buffer
 * @return: Promise
 */
export function imgType(path) {
  return new Promise((resolve, reject) => {
    switch (getPathType(path)) {
      case 'Url':
        imgTypeFromUrl(path).then(resolve).catch(reject)
        break
      case 'File':
        imgTypeFromFile(path).then(resolve).catch(reject)
        break
      case 'Blob':
        imgTypeFromBlob(path).then(resolve).catch(reject)
        break
      case 'Base64':
        imgTypeFromBase64(path).then(resolve).catch(reject)
        break
      case 'Uint8Array':
        imgTypeFromUint8Array(path).then(resolve).catch(reject)
        break
      case 'ArrayBuffer':
        imgTypeFromArrayBuffer(path).then(resolve).catch(reject)
        break
      default:
        break
    }
  })
}

window.imgType = imgType
