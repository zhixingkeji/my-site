## 监听有异步或改变state变量

```js
//定义一个变量等于计算属性 返回store.state的某个属性, watch监听这个变量,把新值赋给想要的地方

setup(){
  	let form = ref({
      id: store.state.spellID   //如此赋值 当state.spellID改变后无法监听到
    })
  
  	
		const getSpellID = computed(
  		  () => {
  		    return store.state.spellID
  		  }
		)
    
    
    
    return{
      getSpellID
    }
}
  

watch: {
    getSpellID(newData, oldData) {
      this.form.id = newData
    }
}

```

