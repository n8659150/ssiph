<template>
    <tr>
        <th width="250">
            {{title}}
        </th>
        <td width="215">
            <span>{{description}}
                <span class="unitStyle">{{lengliangUnit}}</span>
            </span>
            <!--<span ng-show="britishSystem == 'on'">23884~54592 <span class="unitStyle">BTU/h</span></span>-->
        </td>
        <td>
            <input type="text" :placeholder="placeholder" v-on:input="updateValue($event.target.value)" class="advSelect" />
        </td>
    </tr>
</template>
<script>
export default {
  props: {
    title: String,
    description: String,
    lengliangUnit: String,
    placeholder: String,
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