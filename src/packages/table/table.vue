<template>
    <div class="yc-table">
        <div class="yc-table-title" v-if="$slots.title || title">
            <slot name="title">{{ title }}</slot>
        </div>
        <div>
            <slot></slot>
        </div>
        <div ref="tableHeader">
            yc-table-header
        </div>
        <div>
            <table>
                <colgroup>
                    <col
                        v-for="(column, index) in doColumns"
                        :key="index"
                        :width="column.width"
                    >
                </colgroup>
                yc-table-body
                <!-- <yc-table-body></yc-table-body> -->
            </table>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        data: Array,
        title: String,
        border: Boolean,
    },
    data() {
        return {
            tableWidth: null,
            columns: [],
        };
    },
    computed: {
        doWidth() {
            return this.tableWidth ? `${this.tableWidth}px` : null;
        },
        doColumns() {
            return this.columns.filter(e => e.show);
        },
    },
};
</script>
