import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, ScrollView, SafeAreaView, Alert } from "react-native";
import {
  Service,
  Welcome,
  Categories,
  Promotion,
  Discount,
} from "../../../components/tabcomponents";
import { styles } from "./styles";
import {
  getActiveServices,
  getServices
} from "../../../store/actions/services.action";
import {
  getCategories,
  selectCategory,getCategorie
} from "../../../store/actions/category.actions";

const Home = ({ navigation }) => {
  const [service, setService] = useState(false);
  const [active, setActive] = useState(false);
  const [categories, setCategories] = useState([]);
  const dispatch = useDispatch();
  const isActive = useSelector((state) => state.service.selected);
  const services = useSelector((state) => state.service.active);
  const tecnicos = useSelector((state) => state.category.categories);



  useEffect(() => {
    dispatch(getActiveServices());
    dispatch(getServices());
    dispatch(getCategories());
    setService(isActive);
    setActive(services);
    setCategories(tecnicos);
  }, [isActive]);

  const onSelected = (item) => {
    dispatch(selectCategory(item.id));
    dispatch(getCategorie());
    navigation.navigate("Categories", { name: item.name });
  };

  return (
    <ScrollView
      style={styles.container}
      horizontal={false}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        {service ? (
          <Service active={active} navigation={navigation} date="12/22" />
        ) : null}
        <Welcome name="Mario" />
        <ScrollView style={styles.container1} horizontal={true}>
          <Categories onSelected={onSelected} tecnicos={categories} />
        </ScrollView>
        <Promotion />
        <Discount />
      </View>
    </ScrollView>
  );
};

export default Home;
