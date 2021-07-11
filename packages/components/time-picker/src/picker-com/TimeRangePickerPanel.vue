<template>
  <div>
    <TimePanel :value="startTime" @change="emitChange('start', $event)"></TimePanel>
    <TimePanel :value="endTime" @change="emitChange('end', $event)"></TimePanel>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { TimeRangePanelProps, TimePanelValue } from '../types'
import TimePanel from './Time.vue'
import { IxPropTypes } from '@idux/cdk/utils'

export default defineComponent({
  name: 'IxTimeRangePanel',
  components: {
    TimePanel,
  },
  props: {
    value: IxPropTypes.arrayOf(IxPropTypes.object),
  },
  emits: ['update:value', 'change'],
  setup(props: TimeRangePanelProps, { emit }) {
    const startTime = computed(() => props.value[0])
    const endTime = computed(() => props.value[1])

    function emitChange(type: 'start' | 'end', val: TimePanelValue) {
      const timeRange = type === 'start' ? [val, endTime.value] : [startTime.value, val]
      emit('update:value', timeRange)
      emit('change', timeRange)
    }

    return {
      startTime,
      endTime,
      emitChange,
    }
  },
})
</script>
