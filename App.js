import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import NavBar from "./views/components/NavBar";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Clientes from "./views/Clientes";
import Vender from "./views/Vender";
import EnCamino from "./views/EnCamino";
import Cobranzas from "./views/Cobranzas";
import Estadisticas from "./views/Estadisticas";
import Compras from "./views/Compras";
import Pagos from "./views/Pagos";
import tw from "twrnc";

// async function fetchCargas() {
//   // Tu función fetchCargas aquí
// }

export default function App() {
  const Stack = createStackNavigator();

  // const [cargas, setCargas] = useState([]);

  // useEffect(() => {
  //   fetchCargas().then((cargas) => setCargas(cargas));
  // }, []);

  return (
    // <View style={styles.clientesContainer}>
    <View style={tw.style("flex-1")}>
      <NavigationContainer>
        <NavBar />
        <Stack.Navigator initialRouteName="Clientes">
          <Stack.Screen
            name="Clientes"
            component={Clientes}
            z
            options={{
              headerLeft: null,
            }}
          />
          <Stack.Screen
            name="Vender"
            component={Vender}
            options={{
              headerLeft: null,
            }}
          />
          <Stack.Screen
            name="EnCamino"
            component={EnCamino}
            options={{
              headerLeft: null,
            }}
          />
          <Stack.Screen
            name="Cobranzas"
            component={Cobranzas}
            options={{
              headerLeft: null,
            }}
          />
          <Stack.Screen
            name="Estadisticas"
            component={Estadisticas}
            options={{
              headerLeft: null,
            }}
          />
          <Stack.Screen
            name="Compras"
            component={Compras}
            options={{
              headerLeft: null,
            }}
          />
          <Stack.Screen
            name="Pagos"
            component={Pagos}
            options={{
              headerLeft: null,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}
