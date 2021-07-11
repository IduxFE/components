import { watch, onMounted, onUnmounted } from 'vue'
import { OverlayInstance, useOverlay } from '@idux/cdk/overlay'
import { computed, getCurrentInstance } from '@vue/runtime-core'
import { TimePickerProps, TimeRangePickerProps } from './types'

interface PickerOverlay {
  overlayTriggerRef: OverlayInstance['triggerRef']
  overlayRef: OverlayInstance['overlayRef']
  overlayVisibility: OverlayInstance['visibility']
  showOverlay: OverlayInstance['show']
  hideOverlay: OverlayInstance['hide']
}
export function usePickerOverlay(props: TimePickerProps | TimeRangePickerProps): PickerOverlay {
  const { emit } = getCurrentInstance()!

  const {
    initialize: initOverlay,
    triggerRef: overlayTriggerRef,
    overlayRef,
    destroy: destroyOverlay,
    visibility: overlayVisibility,
    update: updateOverlayOpt,
    hide: hideOverlay,
    show: showOverlay,
  } = useOverlay({
    scrollStrategy: 'reposition',
    placement: 'bottom-start',
    trigger: 'manual',
    offset: [5, 5],
    hideDelay: 500,
    showDelay: 100,
  })

  const unableToOperate = computed(() => props.disabled || props.readonly)

  watch(
    unableToOperate,
    val =>
      updateOverlayOpt({
        trigger: val ? 'manual' : 'click',
      }),
    {
      immediate: true,
    },
  )

  watch(overlayVisibility, val => emit('update:open', val))
  watch(
    () => props.open,
    isOpen => (isOpen ? showOverlay() : hideOverlay()),
  )

  onMounted(() => {
    initOverlay()
    props.open && showOverlay(0)
  })
  onUnmounted(destroyOverlay)

  return {
    overlayTriggerRef,
    overlayRef,
    overlayVisibility,
    hideOverlay,
    showOverlay,
  }
}
