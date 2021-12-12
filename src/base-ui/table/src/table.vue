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
                    :page-sizes="[10, 20, 30]"
                    :page-size="page.pageSize"
                    :current-page="page.currentPage"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="listCount"
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
        listCount:{
            type: Number,
            default: 0
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
        },
        page: {
            type: Object,
            default: () => ({currentPage: 0, pageSize: 10})
        }
    },
    emits:['update:page'],
    setup(props, {emit}) {

        const handleCurrentChange = (currentPage: number) => {
            emit('update:page', { ...props.page, currentPage })
        }
        const handleSizeChange = (pageSize: number) => {
            emit('update:page', { ...props.page, pageSize })
        }

        return {
            handleSizeChange,
            handleCurrentChange
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
