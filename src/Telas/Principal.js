import { View, Text, StyleSheet, Image, TouchableOpacity , Button} from "react-native";
import detalhes from '../../assets/img-eita.jpg';

export default function Principal() {
  return (
    <>
      <View style={estilos.contentDetalhes}>
        <Text style={estilos.tituloDetalhes}>Detalhe do Produto</Text>
      </View>

      <View style={estilos.listaDescricao}>
        <Text style={estilos.nomeLista}>Lista de compra</Text>
      </View>

      <View style={estilos.contentImage}>
        <Image source={detalhes} style={estilos.styleImage}/>
      </View>

      <Text style={estilos.descricao}>
      Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos.
      </Text>
      <Text style={estilos.preco}>
        R$ 40,00
      </Text>

      <TouchableOpacity style={estilos.botao}>
        <Text style={estilos.textoBotao}>
          Comprar
        </Text>
      </TouchableOpacity>


    </>
  )
}

const estilos = StyleSheet.create({
  contentDetalhes: {
    paddingTop: 30,
    marginLeft: 20,
  },
  tituloDetalhes: {
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    color: "blue",
    fontWeight: "bold"
  },
  listaDescricao: {
    paddingTop: 20,
    marginLeft: 20,
  },
  nomeLista: {
    fontSize: 15,
    fontWeight: "bold",
  },
  contentImage:{
    marginTop: 25,

  },
  styleImage:{
    width: "90%",

  },
  descricao:{
    color: "#CD3333",
    fontWeight: "bold",
    fontSize: 24,
    marginLeft: 20,
    marginTop: 10,
  },
  preco:{
    color:"#00008D",
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 8,
    fontSize: 26,
  },
  botao:{
    marginTop: 30,
    backgroundColor: "#000680",
    paddingVertical: 16,
    borderRadius: 6,
    marginRight:20,
    marginLeft:20,
  },
  textoBotao:{
    color:"#ffffff",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
})