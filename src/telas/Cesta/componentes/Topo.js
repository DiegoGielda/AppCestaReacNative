import React from "react";
import { Image, StyleSheet, Dimensions } from "react-native";
import Texto from '../../../componentes/texto';
import topo from '../../../../assets/topo.png';  

const width = Dimensions.get('screen').width;

export default function Topo({ titulo }) {
    return <>
      <Image source={topo} style={estilos.topo} />
      <Texto style={estilos.titulo}>{ titulo }</Texto>
    </>
  }

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 576 / 768 * width,
    },
    titulo: {
        position: "absolute",
        width: "100%",
        textAling: "left",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 16
    },
});