<template>
  <div class="ix-time-picker-panel">
    <time-options
      v-for="(item, idx) in timeOptionsList"
      :key="idx"
      :value="item.value"
      :options="item.options"
      @select="item.selectHandler"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import TimeOptions from './TimeOptions.vue'

import { object } from 'vue-types'
import { SelectType, TimeOption, TimePickerPanelProps } from './types'

import dayjs from 'dayjs'
import curry from 'lodash/curry'
import { IxPropTypes } from '@idux/cdk/utils'
import {
  generateAmpmOptions,
  generateHourOptions,
  generateOptions,
  getDateAfterSelect,
  getHourToShow,
  normalizeAmPm,
} from './utils'

export default defineComponent({
  name: 'IxTimePickerPanel',
  components: {
    TimeOptions,
  },
  props: {
    value: object<Date>(),
    defaultOpenValue: object<Date>(),
    hourStep: IxPropTypes.number.def(1),
    minuteStep: IxPropTypes.number.def(1),
    secondStep: IxPropTypes.number.def(1),
    disabledHours: IxPropTypes.func().def(() => []),
    disabledMinutes: IxPropTypes.func().def(() => []),
    disabledSeconds: IxPropTypes.func().def(() => []),
    hideDisabledOptions: IxPropTypes.bool.def(false),
    showSelects: IxPropTypes.arrayOf(IxPropTypes.bool).def(() => [true, true, true, false]),
    amPmCapital: IxPropTypes.bool.def(false),
  },
  emits: ['update:value', 'change'],
  setup(props: TimePickerPanelProps, { emit }) {
    const is12Hours = computed(() => props.showSelects[3])
    const panelDate = computed(() => dayjs(props.value ?? props.defaultOpenValue))
    const ampm = computed(() => normalizeAmPm(panelDate.value.hour(), is12Hours.value, props.amPmCapital))
    const hourToShow = computed(() => getHourToShow(panelDate.value.hour(), is12Hours.value))

    const hourOptions = computed(() => ({
      value: hourToShow.value,
      options: generateHourOptions(
        is12Hours.value,
        props.hourStep,
        props.disabledHours(ampm.value),
        props.hideDisabledOptions,
      ),
      selectHandler: curryEmitChange('hour'),
    }))
    const minuteOptions = computed(() => ({
      value: panelDate.value.minute(),
      options: generateOptions(
        60,
        props.minuteStep,
        props.disabledMinutes(hourToShow.value, ampm.value),
        props.hideDisabledOptions,
      ),
      selectHandler: curryEmitChange('minute'),
    }))
    const secondOptions = computed(() => ({
      value: panelDate.value.second(),
      options: generateOptions(
        60,
        props.secondStep,
        props.disabledSeconds(hourToShow.value, panelDate.value.minute(), ampm.value),
        props.hideDisabledOptions,
      ),
      selectHandler: curryEmitChange('second'),
    }))
    const ampmOptions = computed(() => ({
      value: ampm.value,
      options: generateAmpmOptions('', props.amPmCapital, props.hideDisabledOptions),
      selectHandler: curryEmitChange('ampm'),
    }))

    const timeOptionsList = computed(() => {
      return [hourOptions.value, minuteOptions.value, secondOptions.value, ampmOptions.value].filter(
        (item, idx) => props.showSelects[idx],
      )
    })

    const curryEmitChange = curry(emitChange)
    function emitChange(selectType: SelectType, option: TimeOption) {
      const date = getDateAfterSelect(panelDate.value, selectType, is12Hours.value, option.value).toDate()
      emit('update:value', date)
      emit('change', date)
    }

    return {
      timeOptionsList,
    }
  },
})
</script>
