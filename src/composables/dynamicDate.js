import { ref, computed } from 'vue';
import { useDateFormat } from '@vueuse/core';

export function dynamicDate() {
  const date = ref(new Date());
  const internalDate = ref(useDateFormat(date, 'YYYY-MM-DDTHH:mm'));

  const formattedDate = computed({
    get: () => internalDate.value,
    set: (newValue) => {
      date.value = newValue;
    }
  });

  return formattedDate;
}