import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  TextInput,
  SafeAreaView,
  Picker,
} from 'react-native';
import RNPickerSelect, {defaultStyles} from 'react-native-picker-select';
import {useSelector, useDispatch} from 'react-redux';
import {addUser, deleteUser} from 'app/store/reducers/userSlice';

const createUserObject = (name, surname, age, status) => {
  var user = {name: name, surname: surname, age: age, status: status};
  return user;
};
const ListScreen = ({navigation}) => {
  const [name, onChangeName] = useState('');
  const [surname, onChangeSurname] = useState('');
  const [age, onChangeAge] = useState(null);
  const [status, setStatus] = useState('');
  const {users} = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeSurname}
        value={surname}
        placeholder="Surname"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeAge}
        value={age}
        placeholder="Age"
        keyboardType="numeric"
      />
      <RNPickerSelect
        onValueChange={(value) => setStatus(value)}
        style={pickerSelectStyles}
        items={[
          {label: 'Pending', value: 'pending'},
          {label: 'Approved', value: 'approved'},
          {label: 'Disapproved', value: 'disapproved'},
        ]}
      />
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            var user = createUserObject(name, surname, age, status);

            dispatch(addUser(user));
          }}>
          <Text style={styles.text}>ADD USER</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={users}
        keyExtractor={(item) => item.name}
        renderItem={({item}) => <Text>{item.name}</Text>}
        ListHeaderComponent={() =>
          !users.length ? (
            <Text style={styles.emptyMessageStyle}>The list is empty</Text>
          ) : null
        }></FlatList>
    </SafeAreaView>
  );

  // return (
  //   <ScrollView
  //     keyboardShouldPersistTaps="handled"
  //     contentContainerStyle={styles.screen}>
  //     <Text
  //       style={{color: 'white', marginTop: 50, marginLeft: 165, fontSize: 24}}>
  //       Hello {loggedInUser}
  //     </Text>
  //     <FlatList
  //       style={{marginTop: 30, marginLeft: 30}}
  //       keyExtractor={(item) => item.name}
  //       data={users}
  //       renderItem={({item}) => (
  //         <View style={{marginTop: 20}}>
  //           <Image
  //             source={item.imageSrc}
  //             style={{width: 100, height: 100}}></Image>
  //           <Text style={{color: '#ffffff'}}>
  //             {item.name + ' ' + item.surname + ' ' + '-' + ' ' + item.age}
  //           </Text>
  //           {item.approve ? (
  //             <TouchableOpacity
  //               style={styles.disapproveButton}
  //               onPress={() => {
  //                 let newArr = [...users];
  //                 let index = users.findIndex(
  //                   (user) => user.name === item.name,
  //                 );
  //                 newArr[index].approve = false;
  //                 setUsers(newArr);
  //               }}>
  //               <Text
  //                 style={{
  //                   color: '#FFFFFF',
  //                 }}>
  //                 Disable
  //               </Text>
  //               <Icon name={'close'} size={20} color="#FFFFFF" />
  //             </TouchableOpacity>
  //           ) : (
  //             <TouchableOpacity
  //               style={styles.approveButton}
  //               onPress={() => {
  //                 let newArr = [...users];
  //                 let index = users.findIndex(
  //                   (user) => user.name === item.name,
  //                 );
  //                 newArr[index].approve = true;
  //                 setUsers(newArr);
  //               }}>
  //               <Text
  //                 style={{
  //                   color: '#FFFFFF',
  //                 }}>
  //                 Approve
  //               </Text>
  //               <Icon name={'done'} size={20} color="#FFFFFF" />
  //             </TouchableOpacity>
  //           )}
  //         </View>
  //       )}></FlatList>
  //   </ScrollView>
  // );
};
const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: -250,
    height: 1500,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  approveButton: {
    // display: "flex",
    // flexDirection: "row",
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.7)',
    alignItems: 'center',
    justifyContent: 'center',
    width: '27%',
    height: '35%',
    backgroundColor: 'green',
    borderRadius: 15,
    padding: 10,
    left: '65%',
    top: '66%',
    position: 'absolute',
    // padding: 10,
    // marginTop: 5,
    // marginLeft: 25,
  },
  disapproveButton: {
    // display: "flex",
    // flexDirection: "row",
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.7)',
    alignItems: 'center',
    justifyContent: 'center',
    width: '27%',
    height: '35%',
    backgroundColor: 'red',
    borderRadius: 15,
    padding: 10,
    left: '65%',
    top: '66%',
    position: 'absolute',
    // marginTop: 5,
    // marginLeft: 25,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
  },
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'green',
    width: '40%',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  buttonView: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginRight: '2%',
  },
  emptyMessageStyle: {
    textAlign: 'center',
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30,
    width: '40%',
    marginLeft: '3%', // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 8,
    color: 'black',
    paddingRight: 30,
    width: '40%',
    marginLeft: '3%', // to ensure the text is never behind the icon
  },
});

export default ListScreen;
