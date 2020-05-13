import Taro, { Component } from '@tarojs/taro'
import { View, Text, Picker } from '@tarojs/components'
import { AtList, AtListItem, AtCard, AtFab, AtIcon } from 'taro-ui'
import './index.scss'

export default class Index extends Component {
  
  config = {
    navigationBarBackgroundColor: '#3fe699',
    navigationBarTextStyle: 'black',
    navigationBarTitleText: '首页',
    backgroundColor: '#eeeeee',
    backgroundTextStyle: 'light'
  }

  state = {
    dateSel: '',
    dayTotal: 100.00,
    accountingData: [
      {
        id: 4,
        date: '2019-09-09',
        counts: 2,
        contents: [{
          id: 1,
          time: '2019-09-09',
          number: 12.00,
          type: 'out',
          currency: 'rmb',
          wallet: 'default',
          note: '这是一句备注',
          categroy: 'cloths'
        },
        {
          id: 2,
          time: '2019-09-09',
          number: 10.00,
          type: 'in',
          currency: 'rmb',
          wallet: 'default',
          note: '这是第二个备注',
          categroy: 'cloths'
        }]
      }, {
        id: 5,
        date: '2019-09-05',
        counts: 1,
        contents: [{
          id: 2,
          time: '2019-09-04',
          number: 2.00,
          type: 'out',
          currency: 'rmb',
          wallet: 'default',
          note: '这是第三句备注',
          categroy: 'cloths'
        }]
      }, {
        id: 7,
        date: '2019-09-03',
        counts: 2,
        contents: [{
          id: 1,
          time: '2019-09-03',
          number: 12.00,
          type: 'out',
          currency: 'rmb',
          wallet: 'default',
          note: '这是一句备注',
          categroy: 'cloths'
        },
        {
          id: 2,
          time: '2019-09-03',
          number: 10.00,
          type: 'in',
          currency: 'rmb',
          wallet: 'default',
          note: '这是第二个备注',
          categroy: 'cloths'
        }]
      }
    ]
  }

  componentWillMount () {
    var curDate: Date = new Date()
    this.setState({
      dateSel: curDate.getFullYear() + '-' + (curDate.getMonth() + 1)
    })
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    }), () => {
      console.log('setState after change', this.state.dateSel)
    }
  }
  render () {
    return (
      <View className='index'>
        <View className='fab-bar'>
          <AtFab>
            <Text className='at-fab__icon at-icon at-icon-add'></Text>
          </AtFab>
        </View>
        <View className='at-row page-title'>
          <View className='page-section'>
            <View className='at-col'>
              <Picker mode='date' value='' fields='month' onChange={this.onDateChange}>
                <View>
                  <Text className='picker'>{this.state.dateSel}</Text>
                </View>
              </Picker>
            </View>
          </View>
          <View className='at-col at-col__offset-7'>
            <AtIcon className='top-icon' value='credit-card' size='24'></AtIcon>
            <AtIcon className='top-icon' value='search' size='24'></AtIcon>
          </View>
        </View>
        <View className='contents-container'>
          {/* <View>鸽子 🕊</View> */}
          {this.state.accountingData.map((item) =>
            <AtCard
              key={item.id}
              isFull
              className='day-card'
              title={item.date}
              extra={(this.state.dayTotal > 0
                ? '收入:'
                : '支出:')
                + this.state.dayTotal}
              note={'共' + item.counts + '笔'}
            >

              <AtList>
                {item.contents.map((piece) =>
                  <AtListItem
                    arrow='right'
                    key={piece.id}
                    title={piece.categroy}
                    note={piece.note}
                    extraText={piece.number.toString()}
                  ></AtListItem>
                )}
              </AtList>
            </AtCard>
          )}
        </View>
      </View>
    )
  }
}
