import { StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import {Home, Element3, InfoCircle, MoreCircle} from "iconsax-react-native"
import React,{useState} from 'react'

const BottomNav = ({navigation}) => {
  const [activeScreen, setactiveScreen] = useState("Home")
  const menu = [
    {
      name:"Home",
      path:"Homepage",
      icon: [Home]
    },
    {
      name:"Services",
      path:"Services",
      icon: [Element3]
    },
    {
      name:"Learn",
      path:"Homepage",
      icon: [InfoCircle]
    },
    {
      name:"More",
      path:"Homepage",
      icon: [MoreCircle]
    },
  ]
  return (
    <View  style={styles.container}>
      {
        menu.map((item, i)=> (
          <TouchableWithoutFeedback onPress={()=> 
           { setactiveScreen(item.name)
            navigation.navigate(`${item.path}`)}
            } style={styles.menuItem} key={i}>
            {
              activeScreen === item.name ?(
                <View style={styles.menuItem}>
                {item.icon.map((Icon, i)=> <Icon size={30} style={styles.activeIcon} variant={"Bold"} key={i}/>)}
                <Text style={styles.activeIcon}>{item.name}</Text>
                 </View>
              ):(
                <View style={styles.menuItem}>
                {item.icon.map((Icon, i)=> <Icon size={30} style={styles.normalIcon} key={i}/>)}
                <Text  style={styles.normalIcon}>{item.name}</Text>
                 </View>
              )
            }
          </TouchableWithoutFeedback>
          ))
      }
    </View>
  )
}

export default BottomNav

const styles = StyleSheet.create({
    container:{
        width:"100%",
        height:70,
        display:"flex",
        flexDirection: "row",
        justifyContent:'space-between',
        paddingHorizontal:43,
        backgroundColor:"#fff", 
    },
    menuItem:{
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
    },
    normalIcon:{
      color:"#544A67"
    },
    activeIcon:{
      color: "#892DDE",
    }

})