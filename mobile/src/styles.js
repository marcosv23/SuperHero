import {StyleSheet} from 'react-native';
import {useHeaderHeight} from '@react-navigation/stack';

//const headerHeight = useHeaderHeight();
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  titleContainer: {
    flex: 1,
    paddingVertical: 0,
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 40,
    width: '100%',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    width: '100%',
    flexDirection: 'row',
    paddingTop: 40,
    paddingVertical: 24,
  },
  headerText: {
    fontFamily: 'Fira Code',
    fontSize: 18,
  },
  headerBolderText: {
    fontWeight: 'bold',
  },
  title: {
    fontFamily: 'Fira Code',
    fontSize: 30,
    marginBottom: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 30,
    color: '#737380',
  },

  campaignList: {
    marginTop: 50,
  },

  campaign: {
    flex: 1,
    borderWidth: 3,
    flexDirection: 'column',
    width: '100%',
    padding: 100,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#FFF',
  },

  campaignProperty: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  campaignValue: {
    marginTop: 8,
  },
});
