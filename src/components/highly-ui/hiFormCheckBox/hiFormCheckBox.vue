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
            <span style="margin-left:5px;margin-right:10px;">{{option.value}}</span>
            <!--<input type="checkbox" value="轻商2" v-model="productTerritory" />
            <span style="margin-left:5px;margin-right:10px;">轻商2</span>
            <input type="checkbox" value="轻商3" v-model="productTerritory" />
            <span style="margin-left:5px;margin-right:10px;">轻商3</span>-->
        </span>
    </td>
</tr>
</template>
<script>
export default{
    // props:[{'title':String},{'description':String},'options']
    model: {
        prop: 'selectedValue',
        event: 'change'
    },
    props:{title:String,description:String,options:Array,selectedValue:Array},
    methods: {
        updateInput(event){
            let isChecked = event.target.checked;
            let currentValue = event.target.value;
            let newValue = this.selectedValue;
            console.log('this.selectedValue',this.selectedValue);
            console.log('newValue',newValue);
            console.log('isChecked',isChecked);
            console.log('value',currentValue);
            
            if(isChecked){
                if(newValue.length == 0) {
                    newValue.push(currentValue)
                }
                for (let i in newValue){
                    if(newValue[i].indexOf(currentValue) < 0) {
                        newValue.push(currentValue)
                    } else {
                        return
                    }

                }
            } else {
                newValue.splice(newValue.indexOf(currentValue),1)
            }
            this.$emit('change',newValue)
            // console.log(isChecked)
            // let currentValue = event.target.value
            // if(this.modelValue instanceof Array){
            // let newValue= this.modelValue
            // console.log(newValue)
            // if(isChecked){
            // newValue.push(currentValue)
            // }else{
            // newValue.splice(newValue.indexOf(currentValue),1)
            // }
            // this.$emit('change',newValue)
            // }else{
            // this.$emit('change',isChecked?this.trueValue: this.falseValue)
            // }
        }
    }
}
</script>
<style scoped>
</style>