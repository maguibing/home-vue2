<template>
  <div class="box">
    <ul class="container flex-row">
      <li v-for="v in array" :key="v" :class="{active:v==active}" @click="active=v">{{v}}</li>
    </ul>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: "HelloWord",
  data () {
    return {
      active: 2022,
      array: [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014]
    }
  },
}
</script>

<style  scoped>
.box {
  width: 1200px;
  margin: 200px auto;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

.container {
  justify-content: space-between;
}
.container li {
  padding: 0 10px;
  position: relative;
}
.container li::after {
  position: absolute;
  content: "";
  left: 24px;
  top: 37px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: black;
}
.container li:hover {
  cursor: pointer;
}
.line {
  margin-top: 20px;
  height: 2px;
  width: 100%;
  background-color: black;
}

.active {
  color: red;
}

.active::after {
  position: absolute;
  content: "";
  left: 24px;
  top: 37px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: red !important;
}
</style>