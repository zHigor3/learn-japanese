import React, { FC, useEffect, useReducer } from 'react'
import './Hiragana.css'

const initialHiraganaState = {
   latters: [
      { latter: "あ", sound: "a" },
      { latter: "い", sound: "i" },
      { latter: "う", sound: "u" },
      { latter: "え", sound: "e" },
      { latter: "お", sound: "o" },
      { latter: "か", sound: "ka" },
      { latter: "き", sound: "ki" },
      { latter: "く", sound: "ku" },
      { latter: "け", sound: "ke" },
      { latter: "こ", sound: "ko" },
      { latter: "が", sound: "ga" },
      { latter: "ぎ", sound: "gi" },
      { latter: "ぐ", sound: "gu" },
      { latter: "げ", sound: "ge" },
      { latter: "ご", sound: "go" },
      { latter: "さ", sound: "sa" },
      { latter: "し", sound: "shi" },
      { latter: "す", sound: "su" },
      { latter: "せ", sound: "se" },
      { latter: "そ", sound: "so" },
      { latter: "ざ", sound: "za" },
      { latter: "じ", sound: "ji" },
      { latter: "ず", sound: "zu" },
      { latter: "ぜ", sound: "ze" },
      { latter: "ぞ", sound: "zo" },
      { latter: "た", sound: "ta" },
      { latter: "ち", sound: "ti" },
      { latter: "つ", sound: "tsu" },
      { latter: "て", sound: "te" },
      { latter: "と", sound: "to" },
      { latter: "だ", sound: "da" },
      { latter: "ぢ", sound: "di" },
      { latter: "づ", sound: "du" },
      { latter: "で", sound: "de" },
      { latter: "ど", sound: "do" },
      { latter: "な", sound: "na" },
      { latter: "に", sound: "ni" },
      { latter: "ぬ", sound: "nu" },
      { latter: "ね", sound: "ne" },
      { latter: "の", sound: "no" },
      { latter: "は", sound: "ha" },
      { latter: "ひ", sound: "hi" },
      { latter: "ふ", sound: "fu" },
      { latter: "へ", sound: "he" },
      { latter: "ほ", sound: "ho" },
      { latter: "ば", sound: "ba" },
      { latter: "び", sound: "bi" },
      { latter: "ぶ", sound: "bu" },
      { latter: "べ", sound: "be" },
      { latter: "ぼ", sound: "bo" },
      { latter: "ぱ", sound: "pa" },
      { latter: "ぴ", sound: "pi" },
      { latter: "ぷ", sound: "pu" },
      { latter: "ぺ", sound: "pe" },
      { latter: "ぽ", sound: "po" },
      { latter: "ま", sound: "ma" },
      { latter: "み", sound: "mi" },
      { latter: "む", sound: "mu" },
      { latter: "め", sound: "me" },
      { latter: "も", sound: "mo" },
      { latter: "や", sound: "ya" },
      { latter: "ゆ", sound: "yu" },
      { latter: "よ", sound: "yo" },
      { latter: "ら", sound: "ra" },
      { latter: "り", sound: "ri" },
      { latter: "る", sound: "ru" },
      { latter: "れ", sound: "re" },
      { latter: "ろ", sound: "ro" },
      { latter: "わ", sound: "wa" },
      { latter: "を", sound: "wo" },
      { latter: "ん", sound: "n" },
   ],
   alphabet: [] as { latter: string; sound: string }[],
   correctList: [] as { latter: string; sound: string }[],
   incorrectList: [] as { latter: string; sound: string }[]
}

interface HiraganaState {
   latters: { latter: string; sound: string }[]
   alphabet: { latter: string; sound: string }[]
   correctList: { latter: string; sound: string }[]
   incorrectList: { latter: string; sound: string }[]
}

type HiraganaAction =
   | { type: 'UPDATE-CORRECT-LIST'; latter: string; sound: string }
   | { type: 'UPDATE-INCORRECT-LIST'; latter: string; sound: string }
   | { type: 'LOAD-ALPHABET' }
   | { type: 'UPDATE-ALPHABET'; latter: string; sound: string }

// Função Reducer
const hiraganaReducer = (state: HiraganaState, action: HiraganaAction): HiraganaState => {
   switch (action.type) {
      case 'UPDATE-CORRECT-LIST':
         return {
            ...state,
            correctList: [...state.correctList, { latter: action.latter, sound: action.sound }],
         };

      case 'UPDATE-INCORRECT-LIST':
         return {
            ...state,
            incorrectList: [...state.incorrectList, { latter: action.latter, sound: action.sound }],
         };

      case 'LOAD-ALPHABET':
         return {...state, alphabet: state.latters}

      case 'UPDATE-ALPHABET':
         return {
            ...state,
            incorrectList: [...state.incorrectList, { latter: action.latter, sound: action.sound }],
         };

      default:
         return state;
   }
}

const Hiragana: FC = () => {
   const [alphabet, alphabetDispatch] = useReducer(hiraganaReducer, initialHiraganaState)

   useEffect(() => {
      alphabetDispatch({ type: 'LOAD-ALPHABET' })
   }, []);

   return (
      <div>
         <h1>Hiragana Practice</h1>
         <ul>
            {alphabet.latters.map((item, index) => (
               <li key={index}>
                  {item.latter} ({item.sound})
               </li>
            ))}
         </ul>
      </div>
   )
}

interface ShowLatterProps {
   alphabet: {latter: string; sound: string}[]
   cb: () => void
}

const ShowLatter: FC<ShowLatterProps> = ({alphabet, cb}) => {
   useEffect(() => {

   }, [])

   const handleResult = ():void => {
      cb()
   }

   return (
      <div>

      </div>
   )
}

export default Hiragana
