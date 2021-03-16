<template>
  <form @submit.prevent="saveTask" style="width: fit-content">
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Enter name" v-model="name">
    </div>
    <div class="form-group">
      <input type="text" class="form-control" placeholder="Enter description" v-model="description">
    </div>
    <div class="form-group">
      <p>Please select status</p>
      <b-form-select v-model="status"  class="mb-3">
        <b-form-select-option value="to_do">To do</b-form-select-option>
        <b-form-select-option value="in_progress">In progress</b-form-select-option>
        <b-form-select-option value="done">Done</b-form-select-option>
      </b-form-select>
    </div>
    <button type="submit" class="btn btn-block btn-primary">Add</button>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
name: "AddTask",
  data() {
    return {
      name: '',
      description: '',
      status: ''
    }
  },
  methods:{
    ...mapActions(["addTask"]),
    saveTask() {
      this.addTask({
        name: this.name,
        description: this.description,
        status: this.status
      })
    }
  }
}
</script>

<style scoped>

</style>