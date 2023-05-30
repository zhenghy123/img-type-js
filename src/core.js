function _check(buffer, headers, options) {
  options = {
    offset: 0,
    ...options,
  }

  for (const [index, header] of headers.entries()) {
    // If a bitmask is set
    if (options.mask) {
      // If header doesn't equal `buf` with bits masked off
      if (header !== (options.mask[index] & buffer[index + options.offset])) {
        return false
      }
    } else if (header !== buffer[index + options.offset]) {
      return false
    }
  }

  return true
}

export async function fileTypeFromTokenizer(tokenizer) {
  try {
    // return new FileTypeParser().parse(tokenizer)

    if (_check([0x42, 0x4d])) {
      return {
        ext: 'bmp',
        mime: 'image/bmp',
      }
    }
  } catch (error) {
    if (!(error instanceof strtok3.EndOfStreamError)) {
      throw error
    }
  }
}

export async function imgTypeFromUrl(input) {}

export async function imgTypeFromFile(file) {
  const reader = new FileReader()
  reader.readAsArrayBuffer(file)
  return new Promise((resolve, reject) => {
    reader.onloadend = () => {
      const bytes = new Uint8Array(reader.result)
      let type
      if (bytes[0] === 0xff && bytes[1] === 0xd8) {
        type = 'image/jpeg'
      } else if (bytes[0] === 0x89 && bytes[1] === 0x50 && bytes[2] === 0x4e && bytes[3] === 0x47) {
        type = 'image/png'
      } else if (bytes[0] === 0x47 && bytes[1] === 0x49 && bytes[2] === 0x46) {
        type = 'image/gif'
      } else if (bytes[0] === 0x42 && bytes[1] === 0x4d) {
        type = 'image/bmp'
      } else if (bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x46 && bytes[8] === 0x57 && bytes[9] === 0x45 && bytes[10] === 0x42 && bytes[11] === 0x50) {
        type = 'image/webp'
      } else if (bytes[0] === 0x3c && bytes[1] === 0x3f && bytes[2] === 0x78 && bytes[3] === 0x6d && bytes[4] === 0x6c) {
        type = 'image/svg+xml'
      } else {
        type = ''
      }
      resolve(type)
    }
    reader.onerror = () => {
      reject('Error while reading the file')
    }
  })
}

export async function imgTypeFromBlob(input) {}

export async function imgTypeFromBase64(input) {}

export async function imgTypeFromUint8Array(input) {}

export async function imgTypeFromArrayBuffer(input) {}

export async function imgTypeFromBuffer(input) {}
