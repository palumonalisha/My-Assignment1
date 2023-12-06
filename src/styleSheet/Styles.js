
import { StyleSheet } from 'react-native';
;

const styles = StyleSheet.create({

container: {
    justifyContent:'center',
    alignItems:'center',
    marginTop:50
},

title: {
 fontSize:40,
 color:'blue',
 fontWeight:'bold'
},

textInput:{
    borderWidth:1,
    borderColor:'blue',
    marginTop:10,
    width:250,
    height:40,
    borderRadius:5,
    paddingLeft:10
},
button:{
    marginTop:10,
    width:250,
    height:40,
    borderRadius:5,
    backgroundColor:'blue',
   
},




card: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    width: 350,
    height: 130,
    flexDirection: 'row', 
    flexWrap: 'wrap',
    padding:15
    
  
},
image: {
    width: 100,
    height:50,
    aspectRatio: 1,
    marginRight:90,
    borderWidth:1,
    borderColor:'gray',
    borderRadius:5
  

},
infoContainer: {
    padding: 5,
    marginLeft:-60

},
name: {
    fontSize:19,
    fontWeight: 'bold'
},
price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    marginTop:5
}
   
});

export { styles }