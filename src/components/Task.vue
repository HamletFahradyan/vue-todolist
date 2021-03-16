<template>
  <div>
    <div>
      Name: {{task.name}}
    </div>
    <div>
      Description: {{task.description}}
    </div>
    <div>
      Status: {{task.status}}
    </div>
    <div>
      <b-button variant="success" @click="$router.push('/list/' + $route.params.id + '/edit');" class="mr-2">Edit</b-button>
    </div>
  </div>
</template>

<script>

export default {
  name: "Task",
  computed: {
    task() {
      return this.$store.getters.getTAskById(this.$route.params.id)
    }
  }
}
</script>

<style scoped>

</style>