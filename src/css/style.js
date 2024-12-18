import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef',
  },
  timer: {
    marginTop: -160,
    fontSize: 45,
    fontWeight: 'bold',
    color: '#FFF',
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 138,
    height: 40,
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 4,
  },
  btnTexto: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00aeef',
  },
  areaUltima: {
    marginTop: 50,
  },
  textoCorrida: {
    fontSize: 25,
    color: '#FFF',
    fontStyle: 'italic',
  },
});
