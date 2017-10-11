<template>
<!--<tr>
    <th>
        {{title}}
    </th>
    <td>
        {{description}}
    </td>
    <td>
        <span v-for="(option,key) in options" :key="key">
            <input type="checkbox" :checked="option.checked" :value="option.value" v-on:change="updateInput($event)" />
            <span style="margin-left:5px;margin-right:10px;">{{option.value}}</span>
        </span>
    </td>
</tr>-->
<tr>
    <th>
        {{title}}
    </th>
    <td>
        {{description}}
    </td>
    <td id="adv-setting-6">
        <label for="freq_ctrl_0_a" v-for="(option,key) in options" :key="key">
            <input name="freq_ctrl_0_a"  :checked="option.checked" :value="option.value" class="radio" type="radio" v-on:change="updateInput($event.target.value)">{{option.name}}
        </label>
    </td>
</tr>
</template>
<script>

export default{
    model: {
        prop:'modelValue',
        event:'change'
    },
    props:{title:String,description:String,options:Array,value:String,modelValue:String},
    methods: {
        updateInput(value){
            this.$emit('change',value);
        } 
            
    }
}
</script>
<style scoped>
</style>