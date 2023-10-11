import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { app, db } from "./components/FirebaseConfig";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  query,
} from "firebase/firestore";
import { useState, useEffect } from "react"; // Tu configuración de Firebase
import { StatusBar } from "expo-status-bar";
import tw from "twrnc";

function Clientes() {
  const [cargas, setCargas] = useState([]);
  const [search, SetSearch] = useState("");
  const [encontrado, setEncontrado] = useState("");

  async function fetchCargas() {
    const cargaRef = collection(db, "carga");

    try {
      const querySnapshot = await getDocs(cargaRef);
      const cargas = [];

      for (const docCarga of querySnapshot.docs) {
        const cargaData = docCarga.data();
        const clientesQuery = query(
          collection(doc(db, "carga", docCarga.id), "clientes")
        );

        const clientesSnapshot = await getDocs(clientesQuery);
        const clientes = clientesSnapshot.docs.map((docCliente) => ({
          id: docCliente.id,
          ...docCliente.data(),
        }));
        cargas.push({ id: docCarga.id, ...cargaData, clientes });
      }

      return cargas;
    } catch (error) {
      console.error("Error al recuperar las cargas:", error);
      return [];
    }
  }

  useEffect(() => {
    fetchCargas().then((cargas) => setCargas(cargas));
  }, []);

  // console.log(cargas[0].clientes);

  function handleSearch() {
    if (cargas) {
      // const find = cargas[0].clientes;
      const found = cargas[0].clientes.filter(
        (fi) => fi.nombre.includes(search)
        //  === search.toLowerCase()
      );
      setEncontrado(found);
      // console.log(found);
      console.log(encontrado);
    }
  }

  return (
    <View style={tw.style("")}>
      <View style={tw.style("flex flex-row")}>
        <TextInput
          onChangeText={(text) => SetSearch(text)}
          value={search}
          style={tw.style(" rounded-lg w-[200px] m-2 bg-gray-300")}
        />
        <TouchableOpacity
          style={tw.style(
            " flex justify-center items-center rounded-lg w-[70px] m-2 bg-sky-300"
          )}
          onPress={() => handleSearch()}
        >
          <Text style={tw.style("text-sky-800")}>Buscar</Text>
        </TouchableOpacity>
        {/* <View>
          {encontrado.nombre ? (
            <Text style={tw.style("text-sky-800")}>{encontrado.nombre}</Text>
          ) : (
            <Text>{""}</Text>
          )}
        </View> */}
      </View>

      <View style={tw.style("py-4 flex flex-row justify-around")}>
        <Text style={tw.style("w-auto text-gray-500 p-2 ")}>Nombre</Text>
        <Text style={tw.style("w-auto text-gray-500 p-2")}>Razon Social</Text>
        <Text style={tw.style("w-auto text-gray-500 p-2")}>Telefono</Text>
        <Text style={tw.style("w-auto text-gray-500 p-2")}>Localidad</Text>
      </View>
      <FlatList
        data={cargas}
        renderItem={({ item }) => (
          <View key={item} style={tw.style("m-2 ")}>
            {encontrado.length
              ? encontrado.map((cli, index) => (
                  <>
                    <View
                      style={tw.style(" flex flex-row justify-around")}
                      key={index}
                    >
                      <Text style={tw.style("w-auto  p-2 ")}>{cli.nombre}</Text>
                      <Text style={tw.style("w-auto p-2")}>
                        {cli.razonSocial}
                      </Text>
                      <Text style={tw.style("w-auto p-2")}>{cli.telefono}</Text>
                      <Text style={tw.style("w-auto p-2")}>
                        {cli.localidad}
                      </Text>
                    </View>
                  </>
                ))
              : item.clientes.map((cli, index) => (
                  <>
                    <View
                      style={tw.style(" flex flex-row justify-around")}
                      key={index}
                    >
                      <Text style={tw.style("w-auto  p-2 ")}>{cli.nombre}</Text>
                      <Text style={tw.style("w-auto p-2")}>
                        {cli.razonSocial}
                      </Text>
                      <Text style={tw.style("w-auto p-2")}>{cli.telefono}</Text>
                      <Text style={tw.style("w-auto p-2")}>
                        {cli.localidad}
                      </Text>
                    </View>
                  </>
                ))}
          </View>
        )}
      />
      <StatusBar style="auto" />
    </View>
  );
}

export default Clientes;
