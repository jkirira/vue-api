require('jsdom-global')()

const chai = require('chai')
const expect = chai.expect;

const Vue = require('vue')
const VueTestUtils = require('@vue/test-utils')
import CustomButton from '../../client/components/CustomButton.vue'

const wrapper = VueTestUtils.mount( CustomButton, {
    propsData: { info: 'Button Name' } }
)

describe('Testing Button', () => {

    it('should exist', () => {
        const Button = wrapper.find('button')
        expect( Button.exists() ).to.be.true
    })

    it('should match text prop', () => {
        const Button = wrapper.find('button')
        expect( Button.text() ).to.equal('Button Name')
    })

});

describe(' custom button functionality', () => {

    it('should emit custom "customClick" event on click', async () => {

        const Button = wrapper.find('button')

        await Button.trigger('click')

        await wrapper.vm.$nextTick()

        expect(Button.emitted()).to.have.a.property('customClick')

    })

})


