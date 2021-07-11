<template>
  <div
    ref="overlayTriggerRef"
    v-click-outside="hideOverlay"
    class="ix-time-picker"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <ix-input
      v-bind="inputProps"
      :value="inputValue"
      @focus="onFocus"
      @blur="onBlur"
      @keyup.esc="hideOverlay()"
      @keyup.enter="showOverlay()"
    >
      <template #suffix>
        <span v-if="showClearIcon" class="ix-time-picker__clear-icon" @click.stop="clearValue">
          <slot name="clearIcon">
            <ix-icon :name="clearIconName" :title="clearIconText" />
          </slot>
        </span>
        <span v-else>
          <slot name="suffix">
            <ix-icon :name="inputProps.suffix" />
          </slot>
        </span>
      </template>
    </ix-input>

    <ix-portal target="ix-time-picker-container">
      <transition name="ix-fade">
        <time-picker-panel
          v-show="overlayVisibility"
          ref="overlayRef"
          :class="overlayClassName"
          v-bind="pickerProps"
          @change="onValueChange"
        />
      </transition>
    </ix-portal>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { TimePickerProps } from './types'
import { IxPropTypes } from '@idux/cdk/utils'
import { controlProp } from '@idux/cdk/forms'

import TimePickerPanel from './picker-com/TimePickerPanel.vue'
import { IxIcon } from '@idux/components/icon'
import { IxInput } from '@idux/components/input'
import { IxPortal } from '@idux/cdk/portal'
import { clickOutside } from '@idux/cdk/click-outside'
import { IxTypography } from '@idux/components/typography'

import { object } from 'vue-types'
import { useCommonBindings } from './useCommonBinding'
import { usePickerOverlay } from './usePickerOverlay'
import { useCommonProps } from './useCommonProps'
import { useClearIcon } from './useClearIcon'
import dayjs from 'dayjs'
import { normalizeFormat } from './utils'
import { useGlobalConfig } from '@idux/components/config'

/**
 * TODO:
 * 1. 支持input输入
 * 2. hover某一列时，高亮input对应的数字区域
 * 3. 浮层底部是否展示确定按钮，需要再确认
 */

export default defineComponent({
  name: 'IxTimePicker',
  components: {
    IxInput,
    IxIcon,
    IxPortal,
    TimePickerPanel,
  },
  directives: {
    clickOutside,
    typography: IxTypography,
  },
  props: {
    control: controlProp,
    value: object<Date>(),
    defaultOpenValue: object<Date>().def(() => dayjs().hour(0).minute(0).second(0).toDate()),

    format: IxPropTypes.string.def('HH:mm:ss'),
    placeholder: IxPropTypes.string.def('请选择时间'),
    disabled: IxPropTypes.bool.def(false),
    readonly: IxPropTypes.bool.def(false),
    clearable: IxPropTypes.bool,
    autofocus: IxPropTypes.bool,
    borderless: IxPropTypes.bool.def(false),
    suffix: IxPropTypes.string,
    clearIcon: IxPropTypes.string,
    clearText: IxPropTypes.string,
    size: IxPropTypes.oneOf(['large', 'medium', 'small'] as const),

    open: IxPropTypes.bool.def(false),
    overlayClassName: IxPropTypes.string,
    hourStep: IxPropTypes.number,
    minuteStep: IxPropTypes.number,
    secondStep: IxPropTypes.number,
    disabledHours: IxPropTypes.func,
    disabledMinutes: IxPropTypes.func,
    disabledSeconds: IxPropTypes.func,
    hideDisabledOptions: IxPropTypes.bool,
  },
  emits: ['update:value', 'update:open', 'change', 'clear', 'focus', 'blur'],
  setup(props: TimePickerProps) {
    const globalConfig = useGlobalConfig('timePicker')

    const { onFocus, onBlur, onClear, onValueChange, valueAccessor } = useCommonBindings()

    const { overlayTriggerRef, overlayRef, overlayVisibility, hideOverlay, showOverlay } = usePickerOverlay(props)

    const { pickerProps, inputProps } = useCommonProps(props, globalConfig)

    const {
      onMouseEnter,
      onMouseLeave,
      showClearIcon,
      clearText: clearIconText,
      clearIcon: clearIconName,
    } = useClearIcon(props, globalConfig)

    const inputValue = computed(() =>
      valueAccessor.value ? dayjs(valueAccessor.value as Date).format(normalizeFormat(props.format)) : '',
    )

    function clearValue(evt: MouseEvent) {
      onClear(evt)
      hideOverlay()
    }

    return {
      onFocus,
      onBlur,
      onValueChange,
      inputValue,
      inputProps,
      pickerProps,
      clearValue,

      // about clearIcon
      onMouseEnter,
      onMouseLeave,
      showClearIcon,
      clearIconText,
      clearIconName,

      // about overlay
      overlayTriggerRef,
      overlayRef,
      overlayVisibility,
      hideOverlay,
      showOverlay,
    }
  },
})
</script>
