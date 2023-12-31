import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs />
        <SearchBar />
      </View>

      <Categories />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
