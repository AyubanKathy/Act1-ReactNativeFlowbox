import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Image } from 'react-native';

const PP = () => {
  return(
    <View>
      <Image source={{ uri: 'https://scontent.fceb1-3.fna.fbcdn.net/v/t39.30808-6/365070006_2018533518489879_7175941985760327355_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a2f6c7&_nc_eui2=AeFZEX3uYJqkGuOEj1MKwxGhVISZ80WGwZ1UhJnzRYbBnTe9J-M4cPOMcKvNvNQ8ysoMCL-YGnmPTiMa8niHtmo7&_nc_ohc=mrh0feS84tEAX-YHFmK&_nc_zt=23&_nc_ht=scontent.fceb1-3.fna&_nc_e2o=s&oh=00_AfB_3f5mUGSAPwzljyJNnKA5og4T2VlrVRNiswdn48yS9w&oe=64FD2350' }} style ={styles.pp} />
    </View>
  ) 
};
const Profile = () => {
  const fname = 'Kathrine Mae'
  const lname = 'Ayuban'
  return(
    <View>
      <Text style ={styles.profile}>{fname} {lname}</Text>
    </View>
  )
};
const Course = props =>{
  return(
    <View>
      <Text style ={styles.course}>{props.like}</Text>
    </View>
  )
};
const Subject = props => {
  return(
    <View>
      <Text style={styles.sub} >{props.subcode}</Text>
    </View>
  )
};

const SubjectDesc = props => {
  return(
    <View>
      <Text style={styles.subdesc}>{props.subdesc}</Text>
    </View>
  )
};
const Units = props => {
  return(
    <View>
      <Text style={styles.units}>Units: {props.units}</Text>
    </View>
  )
};

export default function App() {
  return (
    <View style={styles.container}>
      
      <View style={styles.head}>
        <PP/>
        <Profile/>
        <Course like = "Information Technology 3"/>
      </View>

      <Text style={styles.subtitle}>My Subjects</Text>  

      <View style={styles.sublist}>
        <Subject  subcode= 'ELEC 2'/>
          <View>
            <SubjectDesc subdesc= 'Web Development/Web Enterprise'/>
            <Units units='3'/>
          </View> 
      </View>
      <View style={styles.sublist}>
        <Subject  subcode= 'ELEC 3'/>
          <View>
            <SubjectDesc subdesc= 'Mobile Application'/>
            <Units units='3'/>
          </View> 
      </View>
      <View style={styles.sublist}>
        <Subject  subcode= 'IT 311'/>
          <View>
            <SubjectDesc subdesc= 'Software Engineering'/>
            <Units units='3'/>
          </View> 
      </View>
      <View style={styles.sublist}>
        <Subject  subcode= 'IT 312'/>
          <View>
            <SubjectDesc subdesc= 'Information Assurance and Security 2'/>
            <Units units='3'/>
          </View> 
      </View>
      <View style={styles.sublist}>
        <Subject  subcode= 'IT 313'/>
          <View>
            <SubjectDesc subdesc= 'Quantitative Methods'/>
            <Units units='3'/>
          </View> 
      </View>
      <Text style={styles.clickhere}>Click here to see more</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
  
    },
    head: {
      backgroundColor: '#24469C',
      alignItems: 'left',
      justifyContent: 'center',
      height: 260,
      width: 350,
      borderTopRightRadius: 40,
      borderBottomRightRadius: 40,
      marginTop:'40px',
      marginBottom:'30px',
  
    },
    pp: {
      marginLeft: '20px',
      width: 100,
      height: 100,
      borderRadius: 100 / 2,
    },
    profile:{
      color: '#fff',
      fontSize: '30px',
      marginLeft: '20px' 
    },
    course: {
      color: '#fff',
      marginLeft: '20px',
    },
  
    subtitle:{
      marginRight:'248px',
      fontSize: '20px',
      marginBottom:'5px'
    },
    sublist: {
      flex:1,
      flexDirection:'row',
      justifyContent:'flex-start',
      alignItems:'center',
      width: 350,
      backgroundColor: '#DCDCDC',
      borderTopRightRadius: 10,
      borderTopLeftRadius: 10,
      borderBottomRightRadius: 10,
      borderBottomLeftRadius: 10,
      marginBottom:'8px',
      marginTop:'8px',
    },
  
    sub:{
      fontSize: '22px', 
      padding:5,
      fontWeight:'bold',
      marginLeft:'20px'
    },
    subdesc:{
      marginLeft:'30px'
    },
    units:{
      marginLeft:'30px'
    },
    clickhere:{
      marginTop:'15px',
      marginLeft:'180px',
      fontSize: '16px',
      marginBottom:'40px',
      color:'#24469C'
    }
  },
);
