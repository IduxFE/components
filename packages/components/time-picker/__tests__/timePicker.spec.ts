import { mount, VueWrapper } from '@vue/test-utils'
import { renderWork, wait } from '@tests'
import IxTimePicker from '../src/TimePicker.vue'

import { TimePickerProps } from '../src/types'
import { ComponentPublicInstance, nextTick, reactive, UnwrapRef } from 'vue'
import dayjs from 'dayjs'

describe('TimePicker.vue', () => {
  let wrapper: VueWrapper<ComponentPublicInstance>
  let pickerContainer: HTMLElement
  let pickerPanel: HTMLElement

  function getOptionList(): NodeListOf<HTMLElement> {
    return pickerPanel.querySelectorAll('.ix-time-options')
  }

  function getOptionsItemList(listIndex: number): HTMLElement[] {
    return Array.from(getOptionList()[listIndex].children) as HTMLElement[]
  }

  function getSelectedIndex(listIndex: number): number {
    return getOptionsItemList(listIndex).findIndex(item => item.classList.contains('ix-time-options__item--selected'))
  }

  function getDisabledIndexs(listIndex: number): number[] {
    return getOptionsItemList(listIndex)
      .map((item, index) => ({
        index,
        cls: item.classList,
      }))
      .filter(item => item.cls.contains('ix-time-options__item--disabled'))
      .map(item => item.index)
  }

  function clickOption(listIndex: number, optionIndex: number) {
    getOptionsItemList(listIndex)[optionIndex].click()
  }

  function clickClearIcon() {
    ;(document.querySelector('.ix-time-picker__clear-icon') as HTMLElement)?.click()
  }

  async function initWrapper(
    props: UnwrapRef<Partial<TimePickerProps>>,
    listeners: Record<string, (...args: unknown[]) => unknown> = {},
  ) {
    wrapper = mount(
      {
        components: { IxTimePicker },
        template: `
      <ix-time-picker 
        v-model:value="props.value" 
        v-model:open="props.open"
        v-bind="props"
        v-on="listeners"
      />`,
        setup() {
          return {
            props,
            listeners,
          }
        },
      },
      { attachTo: 'body' },
    )

    await nextTick()

    pickerContainer = document.querySelector('.ix-time-picker-container')!
    pickerPanel = pickerContainer.querySelector('.ix-time-picker-panel')!
  }

  beforeEach(() => {
    if (pickerContainer) {
      pickerContainer.innerHTML = ''
    }
  })

  renderWork(IxTimePicker)

  test('v-model:value work', async () => {
    const props = reactive({
      value: dayjs().hour(1).minute(2).second(3).toDate(),
      open: true,
      // 24hours
      format: 'HH:mm:ss',
    })
    await initWrapper(props)

    // test initial value
    expect(getSelectedIndex(0)).toBe(1)
    expect(getSelectedIndex(1)).toBe(2)
    expect(getSelectedIndex(2)).toBe(3)

    // test value change
    props.value = dayjs().hour(10).minute(20).second(30).toDate()
    await nextTick()
    expect(getSelectedIndex(0)).toBe(10)
    expect(getSelectedIndex(1)).toBe(20)
    expect(getSelectedIndex(2)).toBe(30)

    // test click change value
    clickOption(0, 5)
    clickOption(1, 5)
    clickOption(2, 5)
    expect(props.value.getHours()).toBe(5)
    expect(props.value.getMinutes()).toBe(5)
    expect(props.value.getSeconds()).toBe(5)

    /** test ampm */
    props.format = 'hh:mm:ss a'

    // 12 am
    props.value = dayjs().hour(0).toDate()
    await nextTick()
    expect(getSelectedIndex(0)).toBe(0)
    expect(getSelectedIndex(3)).toBe(0)

    // 10 am
    props.value = dayjs().hour(10).toDate()
    await nextTick()
    expect(getSelectedIndex(0)).toBe(10)
    expect(getSelectedIndex(3)).toBe(0)

    // 12 pm
    props.value = dayjs().hour(12).toDate()
    await nextTick()
    expect(getSelectedIndex(0)).toBe(0)
    expect(getSelectedIndex(3)).toBe(1)

    // 3 pm
    props.value = dayjs().hour(15).toDate()
    await nextTick()
    expect(getSelectedIndex(0)).toBe(3)
    expect(getSelectedIndex(3)).toBe(1)

    // 12 am
    props.value = dayjs().hour(24).toDate()
    await nextTick()
    expect(getSelectedIndex(0)).toBe(0)
    expect(getSelectedIndex(3)).toBe(0)

    // test click change value when use ampm
    props.value = dayjs().hour(5).minute(5).second(5).toDate()
    await nextTick()

    clickOption(0, 0)
    expect(props.value.getHours()).toBe(0)
    expect(props.value.getMinutes()).toBe(5)
    expect(props.value.getSeconds()).toBe(5)

    clickOption(3, 1)
    expect(props.value.getHours()).toBe(12)
    expect(props.value.getMinutes()).toBe(5)
    expect(props.value.getSeconds()).toBe(5)

    clickOption(0, 5)
    expect(props.value.getHours()).toBe(17)
    expect(props.value.getMinutes()).toBe(5)
    expect(props.value.getSeconds()).toBe(5)

    clickOption(3, 0)
    expect(props.value.getHours()).toBe(5)
    expect(props.value.getMinutes()).toBe(5)
    expect(props.value.getSeconds()).toBe(5)

    // test clear value
    await wrapper.findComponent(IxTimePicker).trigger('mouseenter')
    clickClearIcon()
    expect(props.value).toBe(null)
  })

  test('v-model:open work', async () => {
    const props = reactive({ open: true })
    await initWrapper(props)

    expect(pickerPanel.style.display).toBe('')

    props.open = false
    await wait(600)
    expect(pickerPanel.style.display).toBe('none')

    await wrapper.find('.ix-time-picker').trigger('click')
    await wait(200)
    expect(pickerPanel.style.display).toBe('')
    expect(props.open).toBe(true)
  })

  test('format work', async () => {
    const props = reactive<Partial<TimePickerProps>>({
      value: dayjs().hour(1).minute(1).second(1).toDate(),
    })
    await initWrapper(props)

    props.format = 'hh:mm:ss'
    await nextTick()
    expect(pickerPanel.innerHTML).toMatchSnapshot()

    props.format = 'hh:mm:ss a'
    await nextTick()
    expect(pickerPanel.innerHTML).toMatchSnapshot()
  })

  test('disabled & disabledOptions work', async () => {
    const props = reactive<Partial<TimePickerProps>>({
      value: dayjs().hour(0).minute(0).second(0).toDate(),
      open: true,
    })
    await initWrapper(props)

    // test input disabled
    props.disabled = true
    await nextTick()
    expect(wrapper.find('.ix-input').classes()).toContain('ix-input-disabled')

    props.disabled = false
    await nextTick()
    expect(wrapper.find('.ix-input').classes()).not.toContain('ix-input-disabled')

    // test disabled fn
    props.disabledHours = () => [1, 2, 3]
    props.disabledMinutes = (hour: number) => (hour === 5 ? [1, 2, 3] : [])
    props.disabledSeconds = (hour: number, minute: number) => (hour === 5 && minute === 5 ? [1, 2, 3] : [])
    props.value = dayjs().hour(5).minute(5).second(0).toDate()
    await nextTick()
    expect(getDisabledIndexs(0)).toEqual([1, 2, 3])
    expect(getDisabledIndexs(1)).toEqual([1, 2, 3])
    expect(getDisabledIndexs(2)).toEqual([1, 2, 3])

    // test clicking disabled options
    clickOption(0, 1)
    clickOption(1, 1)
    clickOption(2, 1)
    expect(props.value.getHours()).toBe(5)
    expect(props.value.getMinutes()).toBe(5)
    expect(props.value.getSeconds()).toBe(0)

    // test hiding disabled options
    props.hideDisabledOptions = true
    await nextTick()
    expect(getOptionsItemList(0).length).toBe(21)
    expect(getOptionsItemList(1).length).toBe(57)
    expect(getOptionsItemList(2).length).toBe(57)

    expect(getDisabledIndexs(0).length).toBe(0)
    expect(getDisabledIndexs(1).length).toBe(0)
    expect(getDisabledIndexs(2).length).toBe(0)
  })

  test('clearable & clearIcon & clearText work', async () => {
    const props = reactive<Partial<TimePickerProps>>({
      value: new Date(),
    })
    await initWrapper(props)

    const commonIconCls = '.ix-time-picker__clear-icon'
    const defaultIconCls = `${commonIconCls} .ix-icon-close-circle`

    // test hover
    await wrapper.findComponent(IxTimePicker).trigger('mouseenter')
    expect(wrapper.find(defaultIconCls).exists()).toBe(true)

    await wrapper.findComponent(IxTimePicker).trigger('mouseleave')
    expect(wrapper.find(defaultIconCls).exists()).toBe(false)

    // test clearable false
    props.clearable = false
    await wrapper.findComponent(IxTimePicker).trigger('mouseenter')
    expect(wrapper.find(defaultIconCls).exists()).toBe(false)

    // test clearIcon and clearText
    props.clearable = true
    props.clearIcon = 'close'
    props.clearText = 'clearTextToChange'
    await wrapper.findComponent(IxTimePicker).trigger('mouseenter')
    expect(wrapper.find(`${commonIconCls} .ix-icon-close`).exists()).toBe(true)
    expect(wrapper.find(`${commonIconCls} .ix-icon-close`).attributes('title')).toBe('clearTextToChange')
  })

  test('focus and blur work', async () => {
    const props = reactive({
      value: new Date(),
    })
    const focusCb = jest.fn()
    const blurCb = jest.fn()

    await initWrapper(props, {
      focus: focusCb,
      blur: blurCb,
    })

    await wrapper.find('input').trigger('focus')
    expect(focusCb).toBeCalled()

    await wrapper.find('input').trigger('blur')
    expect(blurCb).toBeCalled()
  })

  test('suffix work', async () => {
    const props = reactive<Partial<TimePickerProps>>({})
    await initWrapper(props)

    props.suffix = 'calendar'
    await nextTick()
    expect(wrapper.find(`.ix-input-suffix .ix-icon-calendar`).exists()).toBe(true)
  })

  test('optionsStep work', async () => {
    const props = reactive<Partial<TimePickerProps>>({})
    await initWrapper(props)

    function getOptionsContent(listIndex: number) {
      return getOptionsItemList(listIndex).map(item => Number(item.innerHTML))
    }

    // if every option equal the last option plus step
    function isStepWork(list: number[], step = 1): boolean {
      let worked = true

      list.forEach((item, idx) => {
        if (idx > 0 && item !== list[idx - 1] + step) {
          worked = false
        }
      })

      return worked
    }

    props.hourStep = 5
    props.minuteStep = 7
    props.secondStep = 7
    await nextTick()
    expect(isStepWork(getOptionsContent(0), 5)).toEqual(true)
    expect(isStepWork(getOptionsContent(1), 7)).toEqual(true)
    expect(isStepWork(getOptionsContent(2), 7)).toEqual(true)
  })

  test('defaultOpenValue work', async () => {
    const props = reactive<Partial<TimePickerProps>>({})
    await initWrapper(props)

    await wrapper.findComponent(IxTimePicker).trigger('click')
    expect(getSelectedIndex(0)).toBe(0)
    expect(getSelectedIndex(1)).toBe(0)
    expect(getSelectedIndex(2)).toBe(0)

    props.defaultOpenValue = dayjs().hour(12).minute(20).second(30).toDate()
    await nextTick()
    expect(getSelectedIndex(0)).toBe(12)
    expect(getSelectedIndex(1)).toBe(20)
    expect(getSelectedIndex(2)).toBe(30)

    props.format = 'hh:mm:ss a'
    await nextTick()
    expect(getSelectedIndex(0)).toBe(0)
    expect(getSelectedIndex(1)).toBe(20)
    expect(getSelectedIndex(2)).toBe(30)

    props.defaultOpenValue = dayjs().hour(15).minute(20).second(30).toDate()
    await nextTick()
    expect(getSelectedIndex(0)).toBe(3)
    expect(getSelectedIndex(1)).toBe(20)
    expect(getSelectedIndex(2)).toBe(30)

    props.value = dayjs().hour(5).minute(5).second(5).toDate()
    await nextTick()
    expect(getSelectedIndex(0)).toBe(5)
    expect(getSelectedIndex(1)).toBe(5)
    expect(getSelectedIndex(2)).toBe(5)
  })

  test('overlayClassName work', async () => {
    const props = reactive<Partial<TimePickerProps>>({
      overlayClassName: 'test-overlay-class-name',
    })
    await initWrapper(props)

    expect(pickerPanel.classList).toContain('test-overlay-class-name')
  })
})
