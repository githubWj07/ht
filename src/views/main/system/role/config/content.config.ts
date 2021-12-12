export const contentTableConfig = {
    title:'角色管理',
    propList: [
      {prop:'name',label:'角色名称'},
      {prop:'intro',label:'权限介绍'},
      {prop:'createAt',label:'创建时间',slotName:'createAt'},
      {prop:'updateAt',label:'更新时间',slotName:'updateAt'},
      {label:'操作',slotName:'handler'}
    ],
    //是否显示序号
    showIndexColumn:true,
    //是否显示复选框
    showSelectColumn:true
}