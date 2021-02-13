import { shallowMount } from '@vue/test-utils'
import Checkbox from '@/Checkbox.vue'

function mountCheckbox(propsData = {}) {
  return shallowMount(Checkbox, {
    propsData
  })
}

describe('Checkbox.vue', () => {
  it('should initialize properly', () => {
    const wrapper = mountCheckbox({ value: 'v-model value here' })

    expect(wrapper.isVueInstance).toBeTruthy()
  })

  it('should recognizes boolean value', () => {
    const wrapper = mountCheckbox({ value: true })

    expect(wrapper.vm.isBoolean).toBeTruthy()
  })

  it('should initialize checked when true', () => {
    const wrapper = mountCheckbox({ value: true })

    expect(wrapper.vm.value).toBeTruthy()
    expect(wrapper.vm.checked).toBeTruthy()
    expect(wrapper.vm.oldValue).toBeTruthy()
  })

  it('should initialize unchecked when false', () => {
    const wrapper = mountCheckbox({ value: false })

    expect(wrapper.vm.value).toBeFalsy()
    expect(wrapper.vm.checked).toBeFalsy()
    expect(wrapper.vm.oldValue).toBeFalsy()
  })

  it('should properly switch value when boolean', () => {
    const wrapper = mountCheckbox({ value: true })
    const chk = wrapper.find('.vue-chk input')
    const emitted = wrapper.emitted()

    chk.trigger('change')

    expect(wrapper.vm.checked).toBeFalsy()
    expect(emitted.input[emitted.input.length - 1][0]).toBeFalsy()

    chk.trigger('change')

    expect(wrapper.vm.checked).toBeTruthy()
    expect(emitted.input[emitted.input.length - 1][0]).toBeTruthy()
  })

  it('should switch values when value is initialized empty', () => {
    const value = ''
    const valueTrue = 'is true'
    const valueFalse = 'is false'
    const wrapper = mountCheckbox({ value, valueTrue, valueFalse })
    const chk = wrapper.find('.vue-chk input')
    const emitted = wrapper.emitted()

    expect(wrapper.vm.checked).toBeFalsy()

    chk.trigger('change')

    expect(emitted.input[emitted.input.length - 1][0]).toBe(valueTrue)

    chk.trigger('change')

    expect(emitted.input[emitted.input.length - 1][0]).toBe(valueFalse)

    expect(wrapper.vm.oldValue).toBe(value)
  })

  it('should switch values when value is initialized filled', () => {
    let value = '...'
    const valueTrue = 'is true'
    const valueFalse = 'is false'
    const wrapper = mountCheckbox({ value, valueTrue, valueFalse })
    const chk = wrapper.find('.vue-chk input')
    const emitted = wrapper.emitted()

    expect(wrapper.vm.checked).toBeTruthy()

    chk.trigger('change')

    expect(emitted.input[emitted.input.length - 1][0]).toBe(valueFalse)

    wrapper.setProps({
      value: valueFalse
    })

    chk.trigger('change')

    expect(emitted.input[emitted.input.length - 1][0]).toBe(valueTrue)
    expect(wrapper.vm.oldValue).toBe(value)
  })
})
