<template>
  <ul ref="listRef" class="ix-time-options">
    <li v-for="(option, idx) in options" :key="idx" :class="getOptionCls(option)" @click="onSelect(option, idx)">
      {{ displayFormat(option.value) }}
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted, nextTick } from 'vue'
import { IxPropTypes, isNumeric } from '@idux/cdk/utils'
import { scrollToTop } from '@idux/cdk/scroll'
import { TimeOption } from './types'
import { object } from 'vue-types'

interface TimeOptionsProps {
  value: number | string
  options: TimeOption[]
}

function displayFormat(val: string | number): string {
  return isNumeric(val) ? val.toString().padStart(2, '0') : (val as string)
}

export default defineComponent({
  name: 'IxTimeOptions',
  props: {
    value: IxPropTypes.oneOfType([IxPropTypes.number, IxPropTypes.string]).isRequired,
    options: IxPropTypes.arrayOf(object<TimeOption>()).isRequired,
  },
  emits: ['update:value', 'select'],
  setup(props: TimeOptionsProps, { emit }) {
    const listRef = ref<HTMLElement | null>(null)
    function getOptionCls(option: TimeOption) {
      const cls = `ix-time-options__item`
      const clsList = [cls]
      if (option.disabled) {
        clsList.push(`${cls}--disabled`)
      } else if (option.value === props.value) {
        clsList.push(`${cls}--selected`)
      }
      return clsList
    }
    function onSelect(option: TimeOption) {
      if (option.disabled) {
        return
      }

      emit('update:value', option.value)
      emit('select', option)
      nextTick(() => scrollToSelected())
    }

    onMounted(() => nextTick(() => scrollToSelected(0)))

    function scrollToSelected(duration?: number) {
      if (listRef.value) {
        const selectedIndex = props.options.findIndex(opt => opt.value === props.value)
        scrollToTop({
          top: (listRef.value.children[selectedIndex] as HTMLElement)?.offsetTop ?? 0,
          target: listRef.value,
          duration,
        })
      }
    }

    return {
      listRef,
      displayFormat,
      onSelect,
      getOptionCls,
    }
  },
})
</script>
