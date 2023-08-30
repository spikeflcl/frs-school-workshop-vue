import { ref, computed } from 'vue';
import { useDateFormat } from '@vueuse/core';

export function formattedDate({initialValue = new Date(), format = 'YYYY-MM-DDTHH:mm' } = {}) {
  const date = ref(initialValue);
  const internalDate = ref(useDateFormat(date, format));

  const formattedDate = computed({
    get: () => internalDate.value,
    set: (newValue) => {
      date.value = newValue;
    }
  });

  return formattedDate;
}