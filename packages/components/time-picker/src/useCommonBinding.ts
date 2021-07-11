import { useValueAccessor, ValueAccessor } from '@idux/cdk/forms'
import { getCurrentInstance } from '@vue/runtime-core'

interface CommonBindings {
  onFocus: (evt: FocusEvent) => void
  onBlur: (evt: FocusEvent) => void
  onValueChange: (val: Date | [Date, Date]) => void
  onClear: (evt: MouseEvent) => void
  valueAccessor: ValueAccessor
}

export function useCommonBindings(): CommonBindings {
  const { emit } = getCurrentInstance()!
  const valueAccessor = useValueAccessor()
  function onValueChange(val: Date | [Date, Date]) {
    valueAccessor.setValue?.(val)
    emit('change', val)
  }
  function onClear(evt: MouseEvent) {
    valueAccessor.setValue?.(null)
    emit('clear', evt)
  }
  function onFocus(evt: FocusEvent) {
    emit('focus', evt)
  }
  function onBlur(evt: FocusEvent) {
    emit('blur', evt)
  }

  return {
    onFocus,
    onBlur,
    onClear,
    onValueChange,
    valueAccessor,
  }
}
