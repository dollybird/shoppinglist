import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { Font } from 'expo';

export default class App extends React.Component {

  async componentDidMount() {
    await Font.loadAsync({
      'tallcast': require('./assets/fonts/tallcast.ttf'),
    });

    this.setState({fontLoaded: true});
}


  constructor () {
  super ()



  this.state = {
    fontLoaded: false,
    arr: [],
    newItem: ''
    }
  //this.onclick = this.onclick.bind(this)
  }

  render() {
    if (!this.state.fontLoaded) {
      return (<Text>Loading...</Text>)
    }

    return (
/*      <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        value='Username'
      />
      <TextInput
        value='Password'
      />
      <Text style={{alignSelf: 'flex-end', flex: 1/20\}}>Test</Text>
      <Text>Test</Text>
      </View>

      <View style={styles.newitem}>
        <View style={styles.left}><Text>A</Text></View>
        <View style={styles.right}>
          <Text>[+]</Text>
          <Text>[-]</Text>
          <Text>[Remove]</Text>
          </View>
        </View>

      */



<View style={styles.container}>
  <Text style={styles.title}>Shopping List {this.state.result}!!!</Text>
  <View style={styles.list}>

    <View style={{padding: 10}}>
      <TextInput
        style={{height: 40}}
        placeholder="Add New Item"
        onChangeText={(newItem) => this.setState({ newItem: newItem })}
        />
      <Button
        onPress={ () => {
            this.setState({ arr: [...this.state.arr, {quantity: 1, name: this.state.newItem} ]})
          }}
        title='Add'
        />
      </View>


      <FlatList
        data={this.state.arr}
        renderItem={
          ({item, index}) =>
          <View style={styles.newitem}>
            <View style={styles.left}><Text>{item.name}</Text></View>
            <View style={styles.right}>


            <Button
            onPress={ () => {
              let temp = [...this.state.arr]
              temp[index].quantity++
              this.setState({arr: temp})
            }}
            title="+"
            />
              <Text>{item.quantity}</Text>
              <Button
              onPress={ () => {
                let temp = [...this.state.arr]
                temp[index].quantity--
                if (temp[index].quantity) {
                    this.setState({arr: temp})
                } else  {
                  this.setState({arr: [...temp.slice(0,index),...temp.slice(index + 1)]})
                }
              }}
              title="-"
              />
              </View>
            </View>
        }
        keyExtractor={ (item, index) => index }
      />



  </View>
  <Text style={{alignSelf: 'flex-end'}}>
    Courtney
    </Text>
  </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
   title: {
     fontSize: 20,
     color: 'blue',
     fontWeight: 'bold',
     marginTop: 20,
     fontFamily: 'tallcast',
  },
  list: {
    flex: 1,
    borderWidth: 2,
    //justifyContent: 'center'
  },
  newitem: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  left: {
  },
  right: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
