<template>
    <tr>
        <th>
            {{title}}
        </th>
        <td>
            {{description}}
        </td>
        <td>
            <span v-for="(option,key) in options" :key="key">
                <input type="checkbox" :checked="option.checked" :value="option.value" v-on:change="updateInput($event)" />
                <span style="margin-left:5px;margin-right:10px;">{{option.name}}</span>
                <!--<input type="checkbox" value="轻商2" v-model="productTerritory" />
                <span style="margin-left:5px;margin-right:10px;">轻商2</span>
                <input type="checkbox" value="轻商3" v-model="productTerritory" />
                <span style="margin-left:5px;margin-right:10px;">轻商3</span>-->
            </span>
        </td>
    </tr>
</template>
<script>
export default {
    model: {
        prop: 'modelValue',
        event: 'change'
    },
    props: { title: String, description: String, options: Array, value: Array, modelValue: Array },// value的类型和父组件 v-model的类型相同
    //props 里面的 value 和 上面template里面的value并不冲突
    //props 里面的 value 相当于 <hiFormCheckBox :value='xxx'></hiFormCheckBox>
    methods: {
        updateInput(event) {
            let isChecked = event.target.checked;
            let currentValue = event.target.value;
            let newValue = this.modelValue; // 父组件的v-model 传入什么， this.value就是什么值(父组件的:value是什么值，this.value就是什么值)
            if (isChecked) {
                if (newValue.length == 0) {
                    newValue.push(currentValue)
                }
                for (let i in newValue) {
                    if (newValue[i].indexOf(currentValue) < 0) {
                        newValue.push(currentValue)
                    } else {
                        return
                    }

                }
            } else {
                newValue.splice(newValue.indexOf(currentValue), 1)
            }
            // emit的值会发送给selectedValue
            this.$emit('change', newValue)
        }
    }
}
</script>
<style scoped>

</style>