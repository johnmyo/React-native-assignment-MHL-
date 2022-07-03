import React,{useContext} from 'react'

import en from '../components/helper/en';
import mm from '../components/helper/mm';

import { AuthContext } from '../context/context';



const useLocal = () => {
 const {lang} = useContext(AuthContext);
 if(lang === en){
    return en;

 }else{
    return mm;
 }
}

export default useLocal