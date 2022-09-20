import count from './js/count';
import sum from './js/sum'
import {mul} from './js/math'

// 想要webpack打包资源，必须引入该资源
import "./css/iconfont.css";
import "./css/index.css";
import "./less/index.less";
import "./sass/index.sass";
import "./sass/index.scss";
import "./stylus/index.styl";

console.log(mul(3,3))
let result = count(2,1)
console.log(count(2,1))
console.log(sum(1,2,3,4))
console.log(result)


if(module.hot){
  //判断是否支持热模块热替换功能
  module.hot.accept('./js/count')
  module.hot.accept('./js/sum')
}
