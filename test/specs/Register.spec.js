require('jsdom-global')()

const chai = require('chai')
const expect = chai.expect;

const Vue = require('vue')
const VueTestUtils = require('@vue/test-utils')
import Register from '../../client/components/RegisterComponent.vue'

const wrapper = VueTestUtils.mount( Register )

describe('Testing registration form', () => {


  it('should exist', () => {

    const formObject = wrapper.find('form')
    expect( formObject.exists() ).to.be.true

  })

  it('should have username field', () => {

    const usernameDiv = wrapper.find('#username')
    expect( usernameDiv.exists() ).to.be.true

  })

  it('should have password field', () => {

    const passwordDiv = wrapper.find('#password')
    expect( passwordDiv.exists() ).to.be.true

  })

  it('should have a signup button', () => {

    const button = wrapper.find('button')
    expect( button.exists() ).to.be.true

  })

});

describe('registration form functionality', () => {

  it('should show error for empty values', async () => {

    const button = wrapper.find('button')
    await button.vm.$emit('customClick')

    const message_div = wrapper.find('#messageDiv')
    expect( message_div.isVisible() ).to.be.true
    // console.log( message_div.text() )
    expect( message_div.text() ).to.equal('Please fill all values')


  })

  it('should show error for one empty values', async () => {

    const passwordDiv = wrapper.find('#password')
    await passwordDiv.setValue('password')
    // console.log(passwordDiv.element.value)

    const button = wrapper.find('button')
    await button.vm.$emit('customClick')

    const message_div = wrapper.find('#messageDiv')
    expect( message_div.isVisible() ).to.be.true
    // console.log( message_div.text() )
    expect( message_div.text() ).to.equal('Please fill all values')
  })

})
