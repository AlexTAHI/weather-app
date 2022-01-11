import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class CustomIcon extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <Ionicons name={props.name} size={props.size} color={props.color} />;
    }
}