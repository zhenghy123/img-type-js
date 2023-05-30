## img-type-js

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
