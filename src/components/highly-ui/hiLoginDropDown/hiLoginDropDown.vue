<template>
<div>
    <!--标题 -->
    <h2>{{title}}</h2>
    <label>
        <select name="productType_a" class="gender_select" :style="customizedStyle" v-on:input="updateValue($event.target.value)">
            <option v-for="(option,key) in options" :value="option.value" :key="key">{{option.name}}</option>
        </select>
    </label>
</div>
</template>
<script>
export default {
  props: {
    title: String,
    // description: String,
    options: Array,
    customizedStyle: String,
    value: String
  },
  methods: {
    updateValue: function(value) {
      // 通过 input 事件发出数值给v-model，相当于发送给props里面定义的这个“value”。
      this.$emit("input", value);
    }
  }
};
</script>
<style>
</style>