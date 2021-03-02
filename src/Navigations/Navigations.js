import * as React from "react"
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"

import Home from "../Screens/Home"
import Setting from "../Screens/Setting"

const Stack = createStackNavigator()

class Navigation extends React.Component{
    render(){
        return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" >
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Setting" component={Setting} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
export default Navigation