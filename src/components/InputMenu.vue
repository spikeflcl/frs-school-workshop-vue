<script setup>
import { ref, toRaw } from 'vue';
import { useNow, useDateFormat } from '@vueuse/core'
import { dynamicDate } from '../composables/dynamicDate.js';

const formattedDate = dynamicDate();
const formChecked = ref([]);
const formEmail = ref('');
const formName = ref('');
const formText = ref('');

const sendForm = () => {
  return {
    name: formName.value,
    email: formEmail.value,
    date: formattedDate.value,
    checkedErrors: toRaw(formChecked.value),
    reportContent: formText.value
  };
}

const resetForm = () => {
  formattedDate.value = useDateFormat(useNow(), 'YYYY-MM-DDTHH:mm');
  formChecked.value = [];
  formEmail.value = '';
  formName.value = '';
  formText.value = '';
};

const emit = defineEmits(['filledForm'])
</script>

<template>
  <div>
    <form @submit.prevent>
      <div class="input-container m-y-10">
        <label class="label">
          E-mail
          <input class="text-input" type="email" name="email" v-model="formEmail" required>
        </label>
        <label class="label">
          Name
          <input class="text-input" type="text" name="name" pattern="^[A-Z].*" title="Must start with a capital letter." v-model="formName" required>
        </label>
      </div>
      <p>{{  }}</p>
      <fieldset class="fieldset m-y-10">
        <input class="form-checkbox" type="checkbox" value="Content Error" id="content_error" v-model="formChecked" checked>
        <label class="label" for="content_error">Content Error</label>
        <input class="form-checkbox" type="checkbox" value="Broken Element" id="broken_element" v-model="formChecked">
        <label class="label" for="broken_element">Broken Element</label>
        <input class="form-checkbox" type="checkbox" value="Other Error" id="other_error" v-model="formChecked">
        <label class="label" for="other_error">Other Error</label>
      </fieldset>
      <div class="input-container">
        <input class="text-input" type="datetime-local" v-model="formattedDate">
        <textarea class="text-input" rows="5" name="text" v-model="formText" maxlength="150"></textarea>
        <button class="input-button" type="submit" @click="$emit('filledForm', sendForm())">Wyślij formularz</button>
        <button class="input-button" type="reset" @click="resetForm">Wyczyść formularz</button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
  .label {
    font-size: 0.5rem;
  }

  .m-y-10 {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .input-container {
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    width: 50%;
  }

  .fieldset {
    display: flex;
    gap: 5px;
  }
</style>
