import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'


class Setting extends React.Component {
    render() {
        return (
            <View>
                <Text>{this.props.username}</Text>
        <Text>{this.props.addres}</Text>
            </View>
        )
    }
}
const mapStateToProps=(state)=>{
    const{username,email,password,addres}=state.reducers
    return{username,email,password,addres}
}
export default connect(mapStateToProps)(Setting)
