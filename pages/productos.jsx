import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Cards from '../components/Cards';
import ModalProducto from '../components/Modal';
import {productos2} from '../Informacion/infoproductos';

export default function Productos() {
  const [modalVisible, setModalVisible] = useState(false);
    const [productoActivo, setProductoActivo] = useState(null);
  
    const handleCardPress = (producto) => {
      setProductoActivo(producto);
      setModalVisible(true);
    };
 return (
    <ScrollView>
      <View>
        <Text style={styles.text}>Todos los productos</Text>
      </View>
      <View style={styles.cardsContainer}>
        {productos2.map((prod, idx) => (
          <Cards
            key={idx}
            foto={prod.foto}
            nombre={prod.nombre}
            precioMayor={prod.precioMayor}
            precioDetal={prod.precioDetal}
            onPress={() => handleCardPress(prod)}
          />
        ))}
      </View>
      <ModalProducto
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        producto={productoActivo}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 16,
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

