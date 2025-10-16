import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Cards from '../components/Cards';
import ModalProducto from '../components/Modal';

const productos = [
  {
    foto: require('../assets/img/Imgproductos/Base de gotero Salome.webp'),
    nombre: 'Producto 1',
    precioMayor: '100',
    precioDetal: '120',
    marca: 'Salome',
    stock: 20,
    descripcion: 'Base de gotero hidratante para todo tipo de piel.',
    cantidadMayor: 6,
  },
  {
    foto: require('../assets/img/Imgproductos/Bálsamo premium Salomé.webp'),
    nombre: 'Producto 2',
    precioMayor: '200',
    precioDetal: '240',
    marca: 'Salomé',
    stock: 15,
    descripcion: 'Bálsamo labial premium con ingredientes naturales.',
    cantidadMayor: 12,
  },
  {
    foto: require('../assets/img/Imgproductos/Lipgloss kis me ushas.webp'),
    nombre: 'Producto 3',
    precioMayor: '150',
    precioDetal: '180',
    marca: 'Ushas',
    stock: 30,
    descripcion: 'Lipgloss de larga duración con acabado brillante.',
    cantidadMayor: 10,
  },
  {
    foto: require('../assets/img/Imgproductos/Lipgloss kis me ushas.webp'),
    nombre: 'Producto 4',
    precioMayor: '150',
    precioDetal: '180',
    marca: 'Ushas',
    stock: 25,
    descripcion: 'Lipgloss de larga duración con acabado brillante.',
    cantidadMayor: 10,
  },
];

function Home() {
  const [modalVisible, setModalVisible] = useState(false);
  const [productoActivo, setProductoActivo] = useState(null);

  const handleCardPress = (producto) => {
    setProductoActivo(producto);
    setModalVisible(true);
  };

  return (
    <ScrollView>
      <View>
        <Text style={styles.text}>Productos mas vendidos</Text>
      </View>
      <View style={styles.cardsContainer}>
        {productos.map((prod, idx) => (
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

export default Home;