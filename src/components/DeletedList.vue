<template>
  <div>
    <vue-good-table
        :columns="columns"
        :rows="deletedList">
      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field == 'actions'">
          <b-button variant="success" @click="$router.push('/list/' + props.row.id);" class="mr-2">Show</b-button>
        </span>
        <span v-else>
          {{props.formattedRow[props.column.field]}}
        </span>
      </template>
    </vue-good-table>
  </div>
</template>

<script>
import 'vue-good-table/dist/vue-good-table.css'
import { VueGoodTable } from 'vue-good-table';
import { mapGetters } from 'vuex';

export default {
  name: "DeletedList",
  components: {
    VueGoodTable,
  },
  computed: {
    ...mapGetters([
      'deletedList'
    ])
  },
  data(){
    return {
      columns: [
        {
          label: 'Id',
          field: 'id',
          sortable: false,
        },
        {
          label: 'Name',
          field: 'name',
          sortable: false,
        },
        {
          label: 'Description',
          field: 'description',
          sortable: false,
        },
        {
          label: 'Status',
          field: 'status',
          sortable: false,
        },
        {
          label: 'Actions',
          field: 'actions',
          sortable: false,
        }
      ]
    };
  }
}
</script>

<style scoped>

</style>