<template>
  <q-page class="q-pa-md">
    <q-list bordered separator>
      <task v-for="(task, key) in tasks" :key="key" :task="task" :id="key" /> 
    </q-list>
    
  </q-page>
</template>

<script>
import { mapGetters } from "vuex";
import Task from "../components/Tasks/Task.vue";
export default {
  data() {
    return {
      tasks:[]
    };
  },
  computed: {
    ...mapGetters("tasks", ["tasks"])
  },
  methods: {},
  components: {
    Task
  }
};
