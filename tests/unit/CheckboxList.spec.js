import { shallowMount } from '@vue/test-utils'
import CheckboxList from '@/CheckboxList.vue'

describe('CheckboxList.vue', () => {
  let wrapper
  let value = []
  const list = [1, 2, 3]

  beforeEach(() => {
    wrapper = shallowMount(CheckboxList, {
      propsData: {
        list,
        value
      }
    })
  })

  it('should initialize properly', () => {
    expect(wrapper.isVueInstance).toBeTruthy()
  })

  it('should select right values', () => {
    const inputs = wrapper.findAll('input[type=checkbox]')

    expect(wrapper.vm.value).toEqual([])

    inputs.at(0).trigger('click')

    expect(wrapper.vm.addedList).toEqual([1])

    inputs.at(2).trigger('click')

    expect(wrapper.vm.addedList).toEqual([1, 3])

    inputs.at(2).trigger('click')

    expect(wrapper.vm.addedList).toEqual([1])

    inputs.at(0).trigger('click')

    expect(wrapper.vm.addedList).toEqual([])

    inputs.at(1).trigger('click')

    expect(wrapper.vm.addedList).toEqual([2])

    inputs.at(0).trigger('click')
    inputs.at(2).trigger('click')

    expect(wrapper.vm.addedList).toEqual([2, 1, 3])
  })
})
