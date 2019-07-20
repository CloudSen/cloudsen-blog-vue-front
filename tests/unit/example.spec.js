import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import TopHeader from '@/components/Header/TopHeader'

describe('TopHeader.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(TopHeader, {
      propsData: { msg },
    })
    expect(wrapper.text()).to.include(msg)
  })
})
