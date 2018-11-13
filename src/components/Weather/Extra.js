import React from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import { LinearGradient } from 'expo';
import Icon from 'react-native-vector-icons/Feather';

import moment from 'moment';
import 'moment/locale/es'
import { connect } from 'react-redux';

/// PASAR A FULLSTATE COMPONENT, GUARDAR LA INFO EN ARRAY Y VALIDAR SI EXISTE, SI ES ASI TRABAJAR EL ARRAY
const Extra = props => {
    let unit = props.unit === "metric" ? "°C" : "°F";
         moment.locale("es");
        let today = moment().format('dddd')

        let days = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sabado"];
        let i = days.findIndex(day => day === today);

        setTimeout(() => {
            if (props.extended)
                console.log(props.extended[0])
        }, 5000);

    return (
        <View style={styles.information}>
            <View>
                <Text style={styles.text}>
                    <Icon name="trending-up" size={16} color="#462535" /> {" "}
                    Temp.Máxima:
                    {" " + props.temp_max +  unit}
                </Text>

                <Text style={styles.text}>
                    <Icon name="trending-down" size={16} color="#462535" />
                    {" "}
                    Temp.Mínima:
                    {" " + props.temp_min + unit}
                </Text>
                <Text style={styles.text}>
                    <Icon name="droplet" size={16} color="#462535" /> {" "}
                    Humedad:
                    {" " + props.humidity + "%"}
                </Text>
                <Text style={styles.text}>
                    <Icon name="chevrons-down" size={16} color="#462535" /> {" "}
                    Presión:
                    {" " + props.pressure + " mb"}
                </Text>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
                <LinearGradient
                    colors={['#008785', '#22B58A']}
                    start={[0,0]}
                    end={[1,1]}
                    style={{
                        position: 'absolute',
                        left: 50,
                        top: 0,
                        bottom: 10,
                        width: 70,
                        height: 25,
                        borderRadius: 30,
                        justifyContent: 'center'
                    }}
                >

                    <TouchableWithoutFeedback onPress={() => {
                        alert([1,2,3].map(el => el))
                    }}>
                        <View>
                            <Text style={{ color: '#fff', textAlign: 'center', fontSize: 10, fontWeight: 'bold' }}>MORE</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </LinearGradient>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    information: {
        flexDirection: 'column',
        width: 300,
        alignItems: 'center',
        height: 163,
        borderRadius: 5,
        borderColor: '#eee',
        borderWidth: 1,
        marginTop: 25,
        padding: 12
    },
    text: {
        fontWeight: 'bold',
        marginBottom: 7
    }
});

const mapStateToProps = state => ({
    extended: state.extended,
    unit: state.unit
});

export default connect(mapStateToProps)(Extra);