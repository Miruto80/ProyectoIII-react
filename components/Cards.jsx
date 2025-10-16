import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function Cards({ foto, nombre, precioMayor, precioDetal, onPress }) {
	return (
		<TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
			<Image source={foto} style={styles.image} />
			<Text style={styles.nombre}>{nombre}</Text>
			<View style={styles.preciocontainer}>
				<Text style={styles.precioMayor}>M:{precioMayor}$</Text>
				<Text style={styles.precioDetal}>D:{precioDetal}$</Text>
			</View>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#fff',
		borderRadius: 10,
		padding: 12,
		margin: 8,
		alignItems: 'center',
		elevation: 3,
		width: 160,
	},
	image: {
		width: 100,
		height: 100,
		borderRadius: 8,
		marginBottom: 8,
		resizeMode: 'contain',
	},
	nombre: {
		fontWeight: 'bold',
		fontSize: 16,
		marginBottom: 4,
		textAlign: 'center',
	},
    preciocontainer: {
        marginBottom: 8,
        alignItems: 'center',
        flexDirection: 'row',
    },
	precioMayor: {
		color: '#388e3c',
		fontWeight: 'bold',
		marginBottom: 2,
        marginRight: 8,
	},
	precioDetal: {
		color: '#1976d2',
		fontWeight: 'bold',
	},
    button: {
        marginTop: 8,
        backgroundColor: '#f57c00',
	},
});
