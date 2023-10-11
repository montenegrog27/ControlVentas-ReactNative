import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

function NavBar() {
  const [selectedTab, setSelectedTab] = useState("Clientes");
  const navigation = useNavigation();

  const navigateToScreen = (screenName) => {
    setSelectedTab(screenName);
    navigation.navigate(screenName);
  };

  return (
    <View style={(styles.navBar, { marginTop: 30 })}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          key="Clientes"
          style={[
            styles.tab,
            {
              backgroundColor:
                selectedTab === "Clientes" ? "#007AFF" : "transparent",
            },
            { height: 30 },
          ]}
          onPress={() => navigateToScreen("Clientes")}
        >
          <Text
            style={{ color: selectedTab === "Clientes" ? "white" : "#007AFF" }}
          >
            Clientes
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          key="Vender"
          style={[
            styles.tab,
            {
              backgroundColor:
                selectedTab === "Vender" ? "#007AFF" : "transparent",
            },
            { height: 30 },
          ]}
          onPress={() => navigateToScreen("Vender")}
        >
          <Text
            style={{ color: selectedTab === "Vender" ? "white" : "#007AFF" }}
          >
            Vender
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          key="EnCamino"
          style={[
            styles.tab,
            {
              backgroundColor:
                selectedTab === "EnCamino" ? "#007AFF" : "transparent",
            },
            { height: 30 },
          ]}
          onPress={() => navigateToScreen("EnCamino")}
        >
          <Text
            style={{ color: selectedTab === "EnCamino" ? "white" : "#007AFF" }}
          >
            EnCamino
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabContainer}>
        {/* Repite el patrón para los otros botones */}
        <TouchableOpacity
          key="Cobranzas"
          style={[
            styles.tab,
            {
              backgroundColor:
                selectedTab === "Cobranzas" ? "#007AFF" : "transparent",
            },
            { height: 30 },
          ]}
          onPress={() => navigateToScreen("Cobranzas")}
        >
          <Text
            style={{ color: selectedTab === "Cobranzas" ? "white" : "#007AFF" }}
          >
            Cobranzas
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          key="Estadisticas"
          style={[
            styles.tab,
            {
              backgroundColor:
                selectedTab === "Estadisticas" ? "#007AFF" : "transparent",
            },
            { height: 30 },
          ]}
          onPress={() => navigateToScreen("Estadisticas")}
        >
          <Text
            style={{
              color: selectedTab === "Estadisticas" ? "white" : "#007AFF",
            }}
          >
            Estadisticas
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          key="Compras"
          style={[
            styles.tab,
            {
              backgroundColor:
                selectedTab === "Compras" ? "#007AFF" : "transparent",
            },
            { height: 30 },
          ]}
          onPress={() => navigateToScreen("Compras")}
        >
          <Text
            style={{ color: selectedTab === "Compras" ? "white" : "#007AFF" }}
          >
            Compras
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          key="Pagos"
          style={[
            styles.tab,
            {
              backgroundColor:
                selectedTab === "Pagos" ? "#007AFF" : "transparent",
            },
            { height: 30 },
          ]}
          onPress={() => navigateToScreen("Pagos")}
        >
          <Text
            style={{ color: selectedTab === "Pagos" ? "white" : "#007AFF" }}
          >
            Pagos
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "column",
    backgroundColor: "#F5F5F5",
    paddingBottom: 5,
  },
  tabContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  tab: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NavBar;
