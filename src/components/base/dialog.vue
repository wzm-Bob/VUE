<template>
  <div>
    <div class="dialog-wrap">
      <div class="dialog-cover"  v-if="isShow" @click="closeMyself"></div>
      <!-- 元素进入/离开的过渡组件 name用于自动生成  如下面的落下 CSS过渡类名 也有事件 -->
      <transition name="drop" mode="out-in" appear>
        <div class="dialog-content"  v-if="isShow">
          <p class="dialog-close" @click="closeMyself">x</p>
          <slot>empty</slot>
          <!-- 用于将元素或组件表示为作用域插槽 -->
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      
    }
  },
  methods: {
    // 这里的this统一指向的是vue 通过事件向父元素传递  子组件中的事件出
    closeMyself () {
      this.$emit('on-close')
    }
  }
}
</script>

<style scoped>
.drop-enter-active {
  transition: all .5s ease;
}
.drop-leave-active {
  transition: all .3s ease;
}
.drop-enter {
  transform: translateY(-500px);
}
.drop-leave-active {
  transform: translateY(-500px);
}

.dialog-wrap {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 8;
}
.dialog-cover {
  background: #000;
  opacity: .5;
  position: fixed;
  z-index: 5;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.dialog-content {
  width: 380px;
    position: fixed;
    max-height: 50%;
    overflow: auto;
    background: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-65%);
    z-index: 10;
    border: 2px solid #464068;
    padding: 2%;
    line-height: 1.6;
    border-radius: 15px;
}
.dialog-close {
      position: absolute;
    right: 10px;
    top: 5px;
    width: 20px;
    height: 20px;
    text-align: center;
    cursor: pointer;
    font-size: 20px;
    color: #4bb4ff;
}
.dialog-close:hover {
  color: #4fc08d;
}
</style>
