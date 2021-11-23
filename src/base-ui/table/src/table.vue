<template>
    <div class="table-wrap">
        <div class="table-header">
            <slot name="header">
                <div class="header-title">
                    {{title}}
                </div>
                <div class="header-handler">
                    <slot name="headerHandler"></slot>
                </div>
            </slot>    
        </div>
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
        <div class="table-footer">
            <slot name="footer">
                <el-pagination
                    v-model:currentPage="currentPage4"
                    :page-sizes="[100, 200, 300, 400]"
                    :page-size="100"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="400"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                >
                </el-pagination>
            </slot>
        </div>
    </div>
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
        },
        title: {
            type:String,
            default: ''
        }
    },
    setup() {

        return {

        }
    }
})
</script>

<style scoped lang="less">
.table-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
}
.table-footer {
    text-align: right;
    margin-top: 10px;
}
</style>
