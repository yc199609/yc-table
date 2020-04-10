import YcTable from './table.vue';
import './table.scss';

YcTable.install = (Vue) => {
    Vue.component(YcTable.name, YcTable);
};

export {
    YcTable as default,
};
