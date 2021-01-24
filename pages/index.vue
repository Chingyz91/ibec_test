<template>
  <div>
    <div class="row">
      <div class="col-lg-6 col-md-12 col-sm-12">
        <Myaccount />
      </div>

      <div class="col-lg-6 col-md-12 col-sm-12">
        <Operations />
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6 col-md-12 col-sm-12">
        <Myaccount />
      </div>

      <div class="col-lg-6 col-md-12 col-sm-12">
        <Operations />
      </div>
    </div>

    <div class="row">
      <div class="col-lg-6 col-md-12 col-sm-12">
        <Myaccount />
      </div>

      <div class="col-lg-6 col-md-12 col-sm-12">
        <Operations />
      </div>
    </div>
  </div>
</template>

<script>
import Myaccount from '@/components/Myaccount'
import Operations from '@/components/Operations'
export default {
  components: {
    Myaccount,
    Operations
  }
}
</script>

<style>

</style>
