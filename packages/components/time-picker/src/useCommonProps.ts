import { computed, ComputedRef } from 'vue'
import { TimePickerProps, TimeRangePickerProps } from './types'
import { normalizeFormat } from './utils'
import pick from 'lodash/pick'
import { TimePickerConfig, TimeRangePickerConfig } from '@idux/components/config'

type InputProps = Pick<
  TimePickerProps | TimeRangePickerProps,
  'disabled' | 'readonly' | 'borderless' | 'autofocus' | 'placeholder' | 'size' | 'suffix'
>

type PickerProps = Pick<
  TimePickerProps | TimeRangePickerProps,
  | 'value'
  | 'defaultOpenValue'
  | 'hourStep'
  | 'minuteStep'
  | 'secondStep'
  | 'disabledHours'
  | 'disabledMinutes'
  | 'disabledSeconds'
  | 'hideDisabledOptions'
> & {
  showSelects: boolean[]
  amPmCapital: boolean
}

interface CommonProps {
  inputProps: ComputedRef<InputProps>
  pickerProps: ComputedRef<PickerProps>
}

export function useCommonProps(
  props: TimePickerProps | TimeRangePickerProps,
  globalConfig: TimePickerConfig | TimeRangePickerConfig,
): CommonProps {
  const flowFormat = computed(() => normalizeFormat(props.format))
  const showSelects = computed(() => [
    /[hH]/.test(flowFormat.value),
    /m/.test(flowFormat.value),
    /s/.test(flowFormat.value),
    /[aA]/.test(flowFormat.value),
  ])

  const pickerProps = computed(() => ({
    ...pick(props, [
      'value',
      'defaultOpenValue',
      'hourStep',
      'minuteStep',
      'secondStep',
      'disabledHours',
      'disabledMinutes',
      'disabledSeconds',
      'hideDisabledOptions',
    ]),
    showSelects: showSelects.value,
    amPmCapital: /A/.test(flowFormat.value),
  }))

  const inputProps = computed(() => ({
    ...pick(props, ['disabled', 'readonly', 'autofocus', 'placeholder']),
    size: props.size ?? globalConfig.size,
    borderless: props.borderless ?? globalConfig.borderless,
    suffix: props.suffix ?? globalConfig.suffix,
  }))

  return {
    pickerProps,
    inputProps,
  }
}
