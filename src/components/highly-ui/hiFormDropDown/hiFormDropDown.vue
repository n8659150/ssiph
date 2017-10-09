<template>
<tr>
    <th>
        <!--产品类型：-->
        {{title}}
    </th>
    <td>
        <!--定速，变频-->
        {{description}}
    </td>
    <td>
        <select name="productType_a" class="advSelect" v-on:input="updateValue($event.target.value)">
            <option value="-1">不限</option>
            <option v-for="(option,key) in options" :value="option.value" :key="key">{{option.value}}</option>
        </select>
    </td>
</tr>
</template>
<script>
export default{
    // props:[{'title':String},{'description':String},'options']
    props:{title:String,description:String,options:Array},
    methods:{
        updateValue: function (value) {
            // var currentValue = value
            // 通过 input 事件发出数值
            this.$emit('input', value)
            console.log(value)
        }
    }
}
</script>
<style>
</style>