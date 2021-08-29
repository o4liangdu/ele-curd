<template>
  <div class="table-container">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
    </el-table>
    <el-pagination background layout="prev, pager, next" :total="paginationData.total" @current-change="currentChange"> </el-pagination>
  </div>
</template>

<script>
export default {
  name: "Table",
  props: {
    tableData: Array,
    paginationData: Object
  },
  methods: {
    currentChange(pageNo) {
      this.$emit("currentPageChange", pageNo);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
