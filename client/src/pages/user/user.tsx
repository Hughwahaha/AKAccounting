import Taro, { Component } from '@tarojs/taro'
import { AtButton } from 'taro-ui'
import { View, Text } from '@tarojs/components'
import './user.scss'

import Login from '../../components/login/index'

export default class User extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='user'>
        <Text>User Page</Text>
        <AtButton type='primary' size='normal'>click!</AtButton>
        <Login />
      </View>
    )
  }
}
