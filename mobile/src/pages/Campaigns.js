import React from 'react';
import {View, Text, Image} from 'react-native';
import logo from './../assets/logo.png';
import styles from './../styles';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function Campaigns() {
  const numCampaigns = 0;
  return (
    <View>
      {/*starting container*/}
      <View style={styles.container}>
        {/*starting header*/}
        <View style={styles.header}>
          <Image source={logo} />

          <Text style={styles.headerText}>
            Total{'  '}
            <Text style={styles.headerBolderText}>
              registered campaigns {numCampaigns}
            </Text>
          </Text>
        </View>
        {/*ending header */}

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Welcome!</Text>

          <Text style={styles.subtitle}>
            Choose a Campaign and be the hero!
          </Text>
        </View>

        {/*starting rendering Campaigns*/}
        <View style={styles.campaignList}>
          <View style={styles.campaign}>
            <Text style={styles.campaignProperty}>ONG</Text>
            <Text style={styles.value}>Ong do Peterete</Text>

            <Text style={styles.campaignProperty}>Description</Text>
            <Text style={styles.value}>Chico aopé precisa se alimentar</Text>

            <Text style={styles.campaignProperty}>Value</Text>
            <Text style={styles.value}>R$ 250,00</Text>
            <Text>Veja mais detalhes</Text>
            <TouchableOpacity style={styles.button} onPress={() => {}} />
          </View>

          <View style={styles.campaign}>
            <Text style={styles.campaignProperty}>ONG</Text>
            <Text style={styles.value}>Ong do Peterete</Text>

            <Text style={styles.campaignProperty}>Description</Text>
            <Text style={styles.value}>Chico aopé precisa se alimentar</Text>

            <Text style={styles.campaignProperty}>Value</Text>
            <Text style={styles.value}>R$ 250,00</Text>
            <Text>Veja mais detalhes</Text>
            <TouchableOpacity style={styles.button} onPress={() => {}} />
          </View>

          <View style={styles.campaign}>
            <Text style={styles.campaignProperty}>ONG</Text>
            <Text style={styles.value}>Ong do Peterete</Text>

            <Text style={styles.campaignProperty}>Description</Text>
            <Text style={styles.value}>Chico aopé precisa se alimentar</Text>

            <Text style={styles.campaignProperty}>Value</Text>
            <Text style={styles.value}>R$ 250,00</Text>

            <Text>Veja mais detalhes</Text>
            <TouchableOpacity style={styles.button} onPress={() => {}} />
          </View>
        </View>
        {/*ending rendering Campaigns*/}
      </View>
      {/*ending container*/}
    </View>
  );
}
