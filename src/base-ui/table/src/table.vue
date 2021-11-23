<template>
    <el-table :data="listData" border style="width: 100%">
        <el-table-column 
            v-if="showSelectColumn" 
            type="selection"
            width="60px"
            align="center"
        />
        <el-table-column 
            v-if="showIndexColumn" 
            label="序号"
            type="index"
            width="60px"
            align="center"
        />
        <template v-for="propItem in propList" :key="propItem.prop">
            <el-table-column v-bind="propItem" align="center">
                <template #default="scope">
                    <slot :name="propItem.slotName" :row="scope.row">
                        {{ scope.row[propItem.prop] }}
                    </slot>
                </template>    
            </el-table-column>
        </template>
    </el-table>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'

export default defineComponent({
    props:{
        listData:{
            type: Array,
            required: true
        },
        propList: {
            type: Array,
            required: true
        },
        showIndexColumn: {
            type:Boolean,
            default: false
        },
        showSelectColumn: {
            type:Boolean,
            default: false
        }
    },
    setup() {

        return {

        }
    }
})
</script>

<style scoped lang="less">

</style>
