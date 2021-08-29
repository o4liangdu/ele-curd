<template>
  <div class="search-container">
    <el-form :inline="true" class="demo-form-inline">
      <span v-for="(item, index) in searchData" :key="index">
        <el-form-item :label="item.label">
          <el-input v-if="item.type === 'input'" :disabled="item.disabled" v-model="item.value" :placeholder="`请输入${item.label}`"></el-input>
          <el-date-picker v-if="item.type === 'date'" :disabled="item.disabled" :picker-options="item.pickerOptions" type="date" v-model="item.value" :placeholder="`请输入${item.label}`"></el-date-picker>
          <el-date-picker v-if="item.type === 'daterange'" :disabled="item.disabled" type="daterange" v-model="item.value" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
          <el-select v-if="item.type === 'select'" v-model="item.value" :disabled="item.disabled" :placeholder="`请选择${item.label}`">
            <el-option v-for="subItem in item.options" :key="subItem.value" :label="subItem.label" :value="subItem.value" :disabled="subItem.disabled"></el-option>
          </el-select>
        </el-form-item>

      </span>
        <el-form-item>
          <el-button type="primary" @click="queryData">查询</el-button>
        </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: {
    searchData: Array
  },
  data() {
    return {};
  },
  methods: {
    queryData() {
      this.$emit("queryData")
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
