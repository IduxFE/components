import { useValueAccessor } from '@idux/cdk/forms'
import { TimePickerConfig, TimeRangePickerConfig } from '@idux/components/config'
import { computed, Ref, ref } from 'vue'
import { TimePickerProps, TimeRangePickerProps } from './types'

export function useClearIcon(
  props: TimePickerProps | TimeRangePickerProps,
  globalConfig: TimePickerConfig | TimeRangePickerConfig,
): {
  clearText: Ref<string>
  clearIcon: Ref<string>
  showClearIcon: Ref<boolean>
  onMouseEnter: () => void
  onMouseLeave: () => void
} {
  const valueAccessor = useValueAccessor()
  const isHover = ref(false)
  const isClearable = computed(
    () => (props.clearable ?? globalConfig.clearable) && !props.disabled && !props.readonly && valueAccessor.value,
  )
  const showClearIcon = computed(() => isClearable.value && isHover.value)

  const clearText = computed(() => props.clearText ?? globalConfig.clearText)
  const clearIcon = computed(() => props.clearIcon ?? globalConfig.clearIcon)

  function onMouseEnter() {
    isHover.value = true
  }
  function onMouseLeave() {
    isHover.value = false
  }

  return {
    clearText,
    clearIcon,
    showClearIcon,
    onMouseEnter,
    onMouseLeave,
  }
}
