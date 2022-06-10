<template>
  <div class="project" :class="{ complete: project.complete }">
    <div class="actions">
      <h3 @click="toggleDetails">{{ project.title }}</h3>
      <div class="icons-wrapper">
        <span class="material-icons delete" @click="deleteProject">
          delete
        </span>
        <router-link :to="{ name: 'Project', params: { id: project.id } }">
          <span class="material-icons edit"> edit </span>
        </router-link>
        <span class="material-icons done" @click="toggleComplete"> done </span>
      </div>
    </div>
    <div class="details" v-if="showDetails">
      <pre>{{ project.details }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project"],
  data() {
    return {
      showDetails: false,
      uri: "http://localhost:3000/projects/" + this.project.id,
    };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
    deleteProject() {
      fetch(this.uri, { method: "DELETE" })
        .then(() => this.$emit("delete", this.project.id))
        .catch((err) => console.log(err));
    },
    toggleComplete() {
      fetch(this.uri, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ complete: !this.project.complete }),
      })
        .then(() => this.$emit("complete", this.project.id))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
.project {
  background: var(--light-bg-color);
  border-radius: 5px;
  margin: 1rem 0;
  border-left: 4px solid var(--ongoing-color);
  box-shadow: 1px 2px 3px var(--shadow-color);
  transition: 0.2s;
}

.actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 1rem;
}

h3 {
  padding: 1rem 1.5rem;
  flex-grow: 1;
  cursor: pointer;
}

.material-icons {
  cursor: pointer;
  padding: 1rem 0.5rem;
  color: var(--subtle-text-color);
  font-size: 1.25rem;
  transition: 0.2s;
}

.details {
  padding: 0rem 0rem 1rem 1.5rem;
}

/* toggled classes + hover */
.done {
  font-weight: bold;
}

.project.complete {
  border-left: 4px solid var(--completed-color);
}

.complete .done {
  color: var(--completed-color);
}

.material-icons:hover {
  color: var(--hover-text-color);
}
</style>
