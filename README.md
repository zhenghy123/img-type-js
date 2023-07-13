## img-type-js
- 背景：
  用户上传图片并裁剪，如果图片的后缀被修改，裁剪后的图片文件可能会变大   
  如果我们知道图片的真实格式并在裁剪的时候手动设置类型就能避免此种情况发生

- 判断图片真实类型

```javascript
npm i img-type-js

import 'img-type-js'
或
import { imgType } from 'img-type-js'

<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>img-type-js</title>
    <script src="img-type-js.js"></script>
    <script defer="defer" src="img-type-js.js"></script>
  </head>
  <body>
    <p>测试图片类型</p>
    <input type="file" multiple="multiple" onchange="fileChange(event)" />
  </body>
</html>
<script>
  function fileChange(e) {
    const files = e.target.files
    for (const file of files) {
      imgType(file).then((res) => {
        console.log('原始类型：', file.type, '检测类型：', res)
        console.log('类型是否一致：', file.type === res)
      })
    }
  }
</script>

```

- 参考：
  https://github.com/sindresorhus/file-type/tree/main
