import React from 'react'
import { Text, View } from 'react-native'
import Navigation from "./src/Navigations/Navigations"
import {Provider} from "react-redux"
import {createStore,applyMiddleware} from "redux"
import reducers from "./src/Redux/reducers/index"
import thunk from "redux-thunk"

const store = createStore(reducers,{},applyMiddleware(thunk))

 class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <Navigation/>
      </Provider>
    )
  }
}
export default App

// import React from "react"
// import {View,Text, ScrollView, TextInput, Button} from "react-native"

// // function App() {
  
// //   return(
// //     <View>
// //       <Text>Hallo</Text>
// //     </View>
// //   )
  
// // }
// class App extends React.Component{
//   state={
//     inputusername:"",
//     result:""
//   }
//   klik=()=>{
//     this.setState({
//       result:this.state.inputusername
//     })

//   }
//   render(){
//     return(
//       <View style={{flex:1}}>
//         <View style={{alignItems:"center",borderBottomWidth:1}}>
//           <Text style={{fontSize:30}}>Header</Text>
//         </View>
//         <ScrollView style={{flex:1}}>
//     <Text>{this.state.result}</Text>
//         </ScrollView>
//         <View style={{borderTopWidth:1,height:110,width:"100%",flexDirection:"row"}}>
//           <View style={{width:"80%",marginTop:5}}>
//           <TextInput 
//           placeholder="kosong"
//           value={this.state.inputusername}
//           onChangeText={(text)=>this.setState({inputusername:text})}
//           />
//           </View>
//           <View >
//             <Button
//             title="pres"
//             onPress={()=>this.klik()}
//             />
//           </View>
//         </View>
//       </View>
//     )
//   }
// }
// export default App