<template>
    <div>
        <h2>{{title}}</h2>
        <label>
            <input :type="type" :placeholder="placeholder" v-on:input="updateValue($event.target.value)" class="txt_input" />
        </label>
    </div>
</template>
<script>
export default {
  props: { title: String, type: String, placeholder: String, value: String },
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