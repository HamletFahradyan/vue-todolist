<template>
<div>
  <form @submit.prevent="editTask" style="width: fit-content">
    <div class="form-group">
      <p>Please enter name</p>
      <input type="text" class="form-control" placeholder="Enter name" v-model="description">
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
</div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "EditTask",
  data() {
    return {
      task: {
        description: '',
        status: ''
      },
      infoSource: null
    }
  },
  computed: {
    description: {
      get () {
        return this.$store.getters.getTAskById(this.$route.params.id).description
      },
      set (value) {
        this.task.description = value;
      }
    },
    status: {
      get () {
        return this.$store.getters.getTAskById(this.$route.params.id).status
      },
      set (value) {
        this.task.status = value;
      }
    }
  },
  methods: {
    ...mapActions(["updateTask"]),
    editTask() {
      if(!this.task.description) {
        this.task.description = this.description;
      }
      this.updateTask({id: this.$route.params.id, data: this.task});
    }
  }
}
</script>

<style scoped>

</style>