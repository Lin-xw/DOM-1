window.dom = {
    find(selector){
      return document.querySelectorAll(selector)
    },
    style (node, name, value) {
        if (arguments.length === 3) {
          node.style[name] = value
        } else if (arguments.length === 2) {
          if (typeof name === 'string') {
            return node.style[name]
          } else if (name instanceof Object) {
            for (let key in name) {
              node.style[key] = name[key]
            }
          }
        }
      },
    each(divList, fn){
      for(let i=0;i<divList.lengthl;i++){
        fn.call(null, divList[i])
      }
    }  
};
