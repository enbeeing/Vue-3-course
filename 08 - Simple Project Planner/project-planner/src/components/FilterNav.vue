<template>
  <nav class="filter-nav">
    <button
      @click="updateFilter('all')"
      :class="{ current: current === 'all' }"
    >
      View All
    </button>
    <button
      @click="updateFilter('completed')"
      :class="{ current: current === 'completed' }"
    >
      Completed
    </button>
    <button
      @click="updateFilter('ongoing')"
      :class="{ current: current === 'ongoing' }"
    >
      Ongoing
    </button>
  </nav>
</template>

<script>
export default {
  props: ["current"],
  methods: {
    updateFilter(by) {
      this.$emit("filterChange", by);
    },
  },
};
</script>

<style>
.filter-nav button {
  background: none;
  border: none;
  outline: none;
  color: var(--subtle-text-color);
  font-size: 0.8rem;
  margin-right: 1rem;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 1px;
  cursor: pointer;
}

.filter-nav .current {
  color: var(--main-text-color);
}
</style>