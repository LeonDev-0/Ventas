import React from 'react';
import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';

// Estilos
const styles = StyleSheet.create({
  page: {
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
  },
});

// Componente para el comprobante
const Comprobante = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>Comprobante de Pago</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.text}>Fecha: 15/05/2024</Text>
        <Text style={styles.text}>Número de Comprobante: 00123</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Emisor:</Text>
        <Text style={styles.text}>Nombre de la Empresa</Text>
        <Text style={styles.text}>Dirección de la Empresa</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Receptor:</Text>
        <Text style={styles.text}>Nombre del Cliente</Text>
        <Text style={styles.text}>Dirección del Cliente</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Detalles:</Text>
        <Text style={styles.text}>Descripción del producto o servicio</Text>
        <Text style={styles.text}>Cantidad: 1</Text>
        <Text style={styles.text}>Precio: $100.00</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.heading}>Total: $100.00</Text>
      </View>
    </Page>
  </Document>
);

export default Comprobante;