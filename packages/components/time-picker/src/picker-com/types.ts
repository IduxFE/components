export interface TimePickerPanelProps {
  value?: Date
  defaultOpenValue?: Date
  hourStep: number
  minuteStep: number
  secondStep: number
  disabledHours: (selectAmPm: string) => number[]
  disabledMinutes: (selectedHour: number, selectAmPm: string) => number[]
  disabledSeconds: (selectedHour: number, selectedMinute: number, selectAmPm: string) => number[]
  hideDisabledOptions: boolean
  showSelects: boolean[]
  amPmCapital: boolean
}

export interface TimeOptionsProps {
  value: number | string
  options: TimeOption[]
}
export interface TimeOption {
  value: number | string
  disabled: boolean
}

export type SelectType = 'hour' | 'minute' | 'second' | 'ampm'
