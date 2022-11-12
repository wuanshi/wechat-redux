import { View, Text } from "@tarojs/components";
import Taro from "@tarojs/taro";
import { useDispatch, useSelector } from "react-redux";
import { increment } from '../../store/CompareListSlice/index'
import { RootState } from "../../store/index";
import "./index.scss";

export default function IndexPage() {
  const dispatch = useDispatch()
  const compareList = useSelector((state: RootState) => state.compareList)
  return (
    <View className='index'>
      <Text>Hello world!</Text>
      <View
        onClick={() => {
          Taro.navigateTo({
            url: "/pages/other/index"
          });
        }}
      >
        nav to sub pages detail
      </View>
      <View>{compareList.value}</View>
      <View onClick={() => {
        dispatch(increment(1))
      }}
      >+1</View>
    </View>
  );
}
