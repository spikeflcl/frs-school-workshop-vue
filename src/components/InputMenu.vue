<script setup>
import { ref } from 'vue';

const formDate = ref(new Date().toISOString().slice(0, 10));
const formChecked = ref([]);
const formEmail = ref('');
const formName = ref('');
const formText = ref('');

const form = {
  name: formName,
  email: formEmail,
  date: formDate,
  checkedErrors: formChecked,
  reportContent: formText
};

const emit = defineEmits(['filledForm'])

</script>

<template>
  <div>
    <form onsubmit="return false">
      <input class="text-input" type="email" v-model="formEmail" required>
      <input class="text-input" type="text" pattern="^[A-Z].*" title="Must start with a capital letter." v-model="formName" required>
      <p>{{  }}</p>
      <fieldset>
        <input class="form-checkbox" type="checkbox" value="Content Error" id="content_error" v-model="formChecked" checked>
        <label class="label" for="content_error">Content Error</label>
        <input class="form-checkbox" type="checkbox" value="Broken Element" id="broken_element" v-model="formChecked">
        <label class="label" for="broken_element">Broken Element</label>
        <input class="form-checkbox" type="checkbox" value="Other Error" id="other_error" v-model="formChecked">
        <label class="label" for="other_error">Other Error</label>
      </fieldset>
      <input class="text-input" type="date" v-model="formDate">
      <textarea class="text-input" rows="5" v-model="formText" maxlength="150"></textarea>
      <button class="input-button" type="submit" @click="$emit('filledForm', form)">Wyślij formularz</button>
      <button class="input-button" type="reset">Wyczyść formularz</button>
    </form>
  </div>
</template>

<style lang="scss" scoped>
  .label {
    font-size: 0.5rem;
  }
</style>