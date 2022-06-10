<template>
  <form @submit.prevent="handleSubmit">
    <label>Title:</label>
    <input type="text" v-model="title" required />

    <label>Details:</label>
    <textarea v-model="details" required></textarea>

    <button>Add Project</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      details: "",
      uri: "http://localhost:3000/projects",
    };
  },
  methods: {
    handleSubmit() {
      let project = {
        title: this.title,
        details: this.details,
        complete: false,
      };

      fetch("http://localhost:3000/projects", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(project),
      })
        .then(() => {
          this.$router.push("/");
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  background: var(--light-bg-color);
  border-radius: 5px;
  padding: 1rem 1.5rem;
  box-shadow: 1px 1px 5px var(--shadow-color);
}

form > * {
  border-radius: 5px;
}

label {
  color: var(--subtle-text-color);
  text-transform: uppercase;
  margin: 1.2rem 0 0.6rem 0;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 1px;
}

input,
textarea {
  font-family: var(--main-font);
  padding: 0.5rem;
  border: 1px solid var(--subtle-text-color);
}

textarea {
  min-height: 100px;
}

form > button {
  align-self: center;
  padding: 0.5rem;
  margin-top: 1.2rem;
  border: none;
  outline: none;
  background: var(--completed-color);
  color: var(--light-bg-color);
  box-shadow: 0 0 5px var(--shadow-color);
  cursor: pointer;
}
</style>