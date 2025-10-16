import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Logo from '../assets/img/logo2.png';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Modal from 'react-native-modal';

export default function Header({ title, showBack = false, onLogout }) {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const [tasa, setTasa] = useState(null);
  const [tasaError, setTasaError] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    async function obtenerTasaDolarApi() {
      try {
        const respuesta = await fetch('https://ve.dolarapi.com/v1/dolares/oficial');
        if (!respuesta.ok) throw new Error(`Error HTTP: ${respuesta.status}`);
        const datos = await respuesta.json();
        const tasaBCV = datos.promedio.toFixed(2);
        setTasa(tasaBCV);
        setTasaError(false);
      } catch (error) {
        setTasaError(true);
      }
    }
    obtenerTasaDolarApi();
  }, []);

  const enlaces = [
    { label: 'Inicio', route: 'Home' },
    { label: 'Productos', route: 'Productos' },
  ];

  return (
    <SafeAreaView style={[styles.safeArea, { paddingTop: insets.top }]}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.tasaRow}>
        <View style={{ flex: 1 }} />
        <Text style={styles.tasa}>
          {tasaError
            ? 'Error al cargar la tasa'
            : tasa
            ? `Tasa del Día: ${tasa} Bs`
            : 'Cargando tasa...'}
        </Text>
      </View>

      <View style={styles.container}>
        <TouchableOpacity onPress={() => setMenuVisible(true)} style={styles.menuButton}>
          <FontAwesome name="bars" size={32} color="black" />
        </TouchableOpacity>
        <Image source={Logo} style={styles.logoLarge} />
        {onLogout && (
          <TouchableOpacity onPress={onLogout} style={styles.logoutButton}>
            <View style={styles.iconRow}>
            <FontAwesome name="user" size={28} color="black" />
            <FontAwesome name="shopping-cart" size={28} color="black" />
            </View>
          </TouchableOpacity>
        )}
      </View>

      <Modal isVisible={menuVisible} onBackdropPress={() => setMenuVisible(false)}>
        <View style={styles.menu}>
          {enlaces.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() => {
                navigation.navigate(item.route);
                setMenuVisible(false);
              }}
            >
              <Text style={styles.menuText}>{item.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#fff',
  },
  tasaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    marginBottom: 2,
  },
  container: {
    height: 60,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 4,
  },
  logoLarge: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginTop: 2,
  },
  menuButton: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  logoutButton: {
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  side: {
    padding: 8,
  },
  logout: {
    fontSize: 14,
    color: 'red',
  },
  tasa: {
    fontSize: 13,
    color: '#555',
    marginTop: 2,
  },
  menu: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
  },
  menuItem: {
    paddingVertical: 12,
  },
  menuText: {
    fontSize: 16,
    color: '#333',
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});