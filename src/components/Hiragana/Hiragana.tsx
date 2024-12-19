import React, { FC, useReducer } from 'react'
import './Hiragana.css'

interface HiraganaState {
   latters: { latter: string; sound: string }[];
}

type HiraganaAction = {type: 'RESET'} |
{type: 'UPDATE-CORRECT-LIST', latter: string, sound: string}

const hiraganaReducer = (state: HiraganaState, action: HiraganaAction): HiraganaState => {
   switch(action.type) {
      case 'RESET':
         return state
      
      case 'UPDATE-CORRECT-LIST':
         return {
            latters: [...state.latters, { latter: action.latter, sound: action.sound }],
         };

      case 'UPDATE-INCORRECT-LIST':
         return { state }
      
      default:
         state
   }
}

const Hiragana: FC = () => {
   const [state, dispatch] = useReducer(hiraganaReducer, {

   });
   
   return(
      <div>

      </div>
   );
}

export default Hiragana
