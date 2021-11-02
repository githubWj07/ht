import "element-plus/dist/index.css";
import {App} from 'vue';
import {
    ElButton,
    ElTable,
    ElTabs,
    ElTabPane,
    ElForm,
    ElFormItem,
    ElInput,
    ElCheckbox,
    ElLink,
    ElContainer,
    ElAside,
    ElHeader,
    ElMain
} from 'element-plus';

const components = [
    ElButton,
    ElTable,
    ElTabs,
    ElTabPane,
    ElForm,
    ElFormItem,
    ElInput,
    ElCheckbox,
    ElLink,
    ElContainer,
    ElAside,
    ElHeader,
    ElMain
]

export function registerApp(app: App): void{
    for (const cpn of components) {
        app.component(cpn.name, cpn)
    }
}