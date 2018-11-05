# helpful-utils
提供了判断js类型的工具方法
## 安装
```
npm install --save helpful-utils 
```
```
import { isString , isNumber , isBooean , isArray , isObject , isFunction , isNull , isUndefined } from 'helpful-utils'
isString('') // true

isNumber(12) // true

isBooean(true) // true

isArray([]) // true

isObject({}) // true

isFunction(()=>{}) // true

isNull(null) // true

isUndefined(undefined) // true
```