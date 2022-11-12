import { Component, PropsWithChildren } from 'react'
import { View, Text } from '@tarojs/components'
import './index.scss'
import Taro from '@tarojs/taro'

export default class Other extends Component<PropsWithChildren> {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='other'>
        <Text>Other</Text>
        <View onClick={() => {
          Taro.navigateTo({
            url: '/pages/sub/detail/index'
          })
        }}
        >nav To Detail</View>
      </View>
    )
  }
}
