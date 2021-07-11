import { AbstractControl } from '@idux/cdk/forms'
import { TimePickerSize } from '@idux/components/core/config'
import type { DefineComponent } from 'vue'

interface CommonProps {
  control?: string | AbstractControl
  format: string
  clearable?: boolean
  autofocus?: boolean
  borderless?: boolean
  suffix?: string
  clearIcon?: string
  clearText?: string
  size?: TimePickerSize
  open: boolean
  disabledHours?: (selectedAmPm: string) => number[]
  disabledMinutes?: (selectedHour: number, selectedAmPm: string) => number[]
  disabledSeconds?: (selectedHour: number, selectedMinute: number, selectedAmPm: string) => number[]
  hideDisabledOptions?: boolean
  hourStep?: number
  minuteStep?: number
  secondStep?: number
  overlayClassName?: string
}

export interface TimePickerProps extends CommonProps {
  value?: Date
  placeholder: string
  disabled: boolean
  readonly: boolean
  defaultOpenValue: Date
}

export interface TimeRangePickerProps extends CommonProps {
  value?: [Date, Date]
  placeholder: [string, string]
  disabled: boolean | [boolean, boolean]
  readonly: boolean | [boolean, boolean]
  defaultOpenValue: [Date, Date]
  separator: string
}

export type TimePickerComponent = InstanceType<DefineComponent<TimePickerProps>>
