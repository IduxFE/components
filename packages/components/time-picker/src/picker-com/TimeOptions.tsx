import { defineComponent, ref, onMounted, nextTick } from 'vue'
import { IxPropTypes, isNumeric, callEmit, IxInnerPropTypes } from '@idux/cdk/utils'
import { scrollToTop } from '@idux/cdk/scroll'
import { TimeOption } from './types'
import { object } from 'vue-types'

const timeOptionsProps = {
  value: IxPropTypes.oneOfType([IxPropTypes.number, IxPropTypes.string]).isRequired,
  options: IxPropTypes.arrayOf(object<TimeOption>()).isRequired,

  // events
  'onUpdate:value': IxPropTypes.emit<(value: number | string) => void>(),
  onSelect: IxPropTypes.emit<(opt: TimeOption) => void>(),
}

type TimeOptionsProps = IxInnerPropTypes<typeof timeOptionsProps>

function displayFormat(val: string | number): string {
  return isNumeric(val) ? val.toString().padStart(2, '0') : (val as string)
}

function getOptionCls(option: TimeOption, value: TimeOptionsProps['value']) {
  const cls = `ix-time-options__item`
  const clsList = [cls]
  if (option.disabled) {
    clsList.push(`${cls}--disabled`)
  } else if (option.value === value) {
    clsList.push(`${cls}--selected`)
  }
  return clsList
}

export default defineComponent({
  name: 'IxTimeOptions',
  props: timeOptionsProps,
  setup(props: TimeOptionsProps) {
    const listRef = ref<HTMLElement | null>(null)

    function onSelect(option: TimeOption) {
      if (option.disabled) {
        return
      }

      callEmit(props.onSelect, option)
      callEmit(props['onUpdate:value'], option.value)

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

    return () => (
      <ul ref={listRef} class="ix-time-options">
        {
          props.options.map((opt, idx) => {
            return <li key={idx} class={getOptionCls(opt, props.value)} onClick={() => onSelect(opt)}>
              {displayFormat(opt.value)}
            </li>
          })
        }
      </ul>
    )

  }
})
