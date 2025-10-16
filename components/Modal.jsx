import React from 'react';
import { View, Text, Image, StyleSheet, Modal, TouchableOpacity } from 'react-native';

export default function ModalProducto({ visible, onClose, producto }) {
	if (!producto) return null;
	return (
		<Modal visible={visible} transparent animationType="slide">
			<View style={styles.overlay}>
				<View style={styles.modalContent}>
					<Text style={styles.nombre}>{producto.nombre}</Text>
					<Image source={producto.foto} style={styles.image} />
					<Text style={styles.marca}>Marca: {producto.marca}</Text>
					<Text style={styles.descripcion}>{producto.descripcion}</Text>
					<Text style={styles.info}>Stock: {producto.stock}</Text>
					<Text style={styles.info}>Mayor: {producto.precioMayor}$ (Cant. mínima: {producto.cantidadMayor})</Text>
					<Text style={styles.info}>Detal: {producto.precioDetal}$</Text>
					<TouchableOpacity onPress={onClose} style={styles.cerrarBtn}>
						<Text style={styles.cerrarTxt}>Cerrar</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	overlay: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,0.5)',
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalContent: {
		backgroundColor: '#fff',
		borderRadius: 12,
		padding: 20,
		width: 300,
		alignItems: 'center',
	},
	nombre: {
		fontWeight: 'bold',
		fontSize: 20,
		marginBottom: 8,
	},
	image: {
		width: 140,
		height: 140,
		borderRadius: 10,
		marginBottom: 10,
		resizeMode: 'contain',
	},
	marca: {
		fontWeight: 'bold',
		fontSize: 15,
		marginBottom: 4,
	},
	descripcion: {
		fontSize: 14,
		marginBottom: 8,
		textAlign: 'center',
	},
	info: {
		fontSize: 14,
		marginBottom: 2,
	},
	cerrarBtn: {
		marginTop: 12,
		backgroundColor: '#d32f2f',
		paddingHorizontal: 18,
		paddingVertical: 8,
		borderRadius: 8,
	},
	cerrarTxt: {
		color: '#fff',
		fontWeight: 'bold',
		fontSize: 16,
	},
});
