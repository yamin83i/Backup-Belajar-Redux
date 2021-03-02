import React from 'react'
import { Text, View, TextInput, StyleSheet,Button } from 'react-native'
import {connect}from "react-redux"
import {emailChange,usernameChange,passwordChange,address} from "../Redux/Action/index"

class Home extends React.Component {
    render() {
        return (
            <View>
                <Text>{this.props.username}</Text>
        <Text>{this.props.email}</Text>
                <TextInput
                placeholder="username"
                value={this.props.username}
                onChangeText={text=>this.props.usernameChange(text)}
                />
                <TextInput
                placeholder="email"
                value={this.props.email}
                onChangeText={text=>this.props.emailChange(text)}
                />
                <TextInput
                placeholder="address"
                value={this.props.addres}
                onChangeText={text=>this.props.address(text)}
                />
                <Button
                title="pindah"
                onPress={()=>this.props.navigation.navigate("Setting")}
                />
            </View>
        )
    }
}
const mapStateToProps=(state)=>{
    const{username,email,password,addres}=state.reducers
    return{username,email,password,addres}
}
export default connect(mapStateToProps,{usernameChange,emailChange,address})(Home)


//