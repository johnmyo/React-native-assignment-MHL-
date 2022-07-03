import RNSecureKeyStore, {ACCESSIBLE} from "react-native-secure-key-store";



export const appStorage = {
    setItem: (key , value) => {
        try{
         RNSecureKeyStore.set(key,value,{accessible: ACCESSIBLE.ALWAYS_THIS_DEVICE_ONLY})
            
        }catch (error){
             console.log('something went wrong! ' , error);
        }
    },
    
    getItem: key => {
        try{
        return RNSecureKeyStore.get(key);
        }catch(error){
            console.log('something went wrong!' , error);
        }
    },

    removeItem: key => {
        try {
            RNSecureKeyStore.delete(key);
        } catch (error) {
            console.log('something went wrong! ' , error);
        }
    }
}