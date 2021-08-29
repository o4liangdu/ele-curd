<template>
  <div>
    <search-component :searchData.sync="searchData" @queryData="queryData" />
    <table-component :tableData="tableData" :paginationData="paginationData" @currentPageChange="currentPageChange"></table-component>
    <modify-component :modifyData.sync="modifyData"></modify-component>
  </div>
</template>

<script>
import './plugins/element';
import SearchComponent from "./components/Search.vue";
import TableComponent from "./components/Table.vue";
import ModifyComponent from "./components/Modify.vue";

export default {
  name: "vue-curd",
  components: {
    SearchComponent,
    TableComponent,
    ModifyComponent
  },
  props: {
    configData: Object
  },
  data() {
    return {
      searchData: [],
      tableData: [],
      paginationData: {
        pageNo: 1,
        pageSize: 10,
        total: 1000
      },
      modifyData: {}
    };
  },
  methods: {
    queryData() {
      console.log("这里执行项目封装好的查询接口，更新tableData和paginationData");
    },
    currentPageChange() {
      this.queryData();
    }
  },
  created() {
    this.searchData = this.configData.searchData;
    this.tableData = this.configData.tableData;
    this.modifyData = this.configData.modifyData;
    this.queryData();
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
