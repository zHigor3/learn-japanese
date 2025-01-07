import React, { FC, useEffect, useReducer, useState } from 'react'
import './Quiz.css'
import { HiraganaAction } from './QuizTypes';
import { HiraganaState, Latter, QuizLatterProps } from './QuizInterfaces';
import { Button, Input } from '../Utils/Utils';
import { LoadArchive } from '../Utils/Utils';
import { useTranslation } from 'react-i18next';

const initialHiraganaState = {
   latters: []  as { latter: string; sound: string }[],
   alphabet: [] as { latter: string; sound: string }[],
   correctList: [] as { latter: string; sound: string }[],
   incorrectList: [] as { latter: string; sound: string }[]
}

const hiraganaReducer = (state: HiraganaState, action: HiraganaAction): HiraganaState => {
   switch (action.type) {
      case 'LOAD-LATTERS':
         return {...state, latters: action.payload}

      case 'LOAD-ALPHABET':
         return {...state, alphabet: action.payload}

      case 'UPDATE-ALPHABET':
         return {
            ...state,
            alphabet: state.alphabet.filter(item => item !== action.payload),
         };

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
      
      case 'RESET':
         return {
            ...state,
            alphabet: state.latters,
            incorrectList: [],
            correctList: []
         }

      default:
         return state;
   }
}

const Quiz: FC = () => {
   const [alphabet, alphabetDispatch] = useReducer(hiraganaReducer, initialHiraganaState)
   const [options, setOptions] = useState<'hiragana' | 'katakana'>('hiragana')
   const [typeOptions, setTypeOptions] = useState<'text' | 'options'>('options')
   const { t, i18n } = useTranslation();

   useEffect(() => {
      alphabetDispatch({ type: 'RESET' })
      const fetchData = async () => {
         const data = await LoadArchive('json', options)
         console.log(data)

         if(data.status === "success") {
            alphabetDispatch({ type: 'LOAD-LATTERS', payload: data.payload })
            alphabetDispatch({ type: 'LOAD-ALPHABET', payload: data.payload })
         }
         else {
            console.log("Erro ao carregar alfabetos: ",data.payload)
         }
      }
      fetchData()
   }, [options, typeOptions]);

   const handleResult = (answer: boolean, result: Latter | null) => {
      if(result !== null) {
         alphabetDispatch({ 
            type: answer ? 'UPDATE-CORRECT-LIST' : 'UPDATE-INCORRECT-LIST', 
            latter: result.latter, 
            sound: result.sound
         })
         alphabetDispatch({ type: 'UPDATE-ALPHABET', payload: result})
         console.log(alphabet)
      }
   }

   return (
      <div className='col-11 container'>
         <h1 className='col-12' style={{display: 'flex', justifyContent: 'center'}}>
            {t('practice.practice')} {String(options[0]).toUpperCase() + String(options).slice(1)}
         </h1>
         <div style={{padding: '12px', width: '250px'}}>
            <Button className="col-12" label='Hiragana' onClick={() => setOptions('hiragana')}/>
         </div>
         <div style={{padding: '12px', width: '250px'}}>
            <Button className="col-12" label='Katakana' onClick={() => setOptions('katakana')}/>
         </div>
         <div style={{padding: '12px', width: '250px'}}>
            <Button className="col-12" label='Modo de resposta' onClick={() => setTypeOptions(typeOptions === 'options' ? 'text' : 'options')}/>
         </div>
         {alphabet.alphabet ? <QuizLatter col="col-12" typeOptions={typeOptions} alphabet={alphabet.alphabet} cb={handleResult} /> : undefined}
         {alphabet.alphabet.length === 0 &&
            <div className='col-12 container'>
               <h1 className='col-12' style={{textAlign: 'center'}}>{t('practice.congratulation', {n: alphabet.correctList.length, total: 71})}</h1>
               <Button onClick={() => alphabetDispatch({ type: 'RESET' })} label={t('practice.restart')} />
            </div>
         }
         {alphabet.correctList.length > 0 && 
            <div className='col-12' style={{marginTop: '12px'}}>
               <span>{t('practice.hits')}: </span>
               {alphabet.correctList.map((val, ind) => <span>{val.latter}</span>)}
            </div>
         }
         {alphabet.incorrectList.length > 0 && 
            <div className='col-12' style={{marginTop: '12px'}}>
               <span>{t('practice.misses')}: </span>
               {alphabet.incorrectList.map((val, ind) => <span>{val.latter} - {val.sound.toUpperCase()}; </span>)}
            </div>
         }
         
         
      </div>
   )
}

const QuizLatter: FC<QuizLatterProps> = ({alphabet = [], cb, col = '', typeOptions}) => {
   const [latter, setLatter] = useState<Latter | null>(null)
   const [options, setOptions] = useState<Latter[]>([])
   const [optionValue, setOptionValue] = useState<string>('')
   const [isHit, setIsHit] = useState<true | false | null>(null)

   useEffect(() => {
      if(alphabet.length === 71) setIsHit(null)
      if (alphabet.length > 0) {
         const uniqueLetters = getRandomUniqueLetters(alphabet, 4)
         setLatter(uniqueLetters[0])
         setOptions(shuffleArray(uniqueLetters))
      } else {
         setLatter(null)
         setOptions([])
      }
   }, [alphabet])

   const getRandomUniqueLetters = (array: Latter[], count: number): Latter[] => {
      const shuffled = [...array].sort(() => 0.5 - Math.random())
      return shuffled.slice(0, Math.min(count, array.length))
   }

   const shuffleArray = (array: Latter[]): Latter[] => {
      const shuffled = [...array]
      for (let i = shuffled.length - 1; i > 0; i--) {
         const j = Math.floor(Math.random() * (i + 1));
         [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
      }
      return shuffled
   };

   const handleClick = (option: Latter) => {
      const isCorrect = option === latter;
      setIsHit(isCorrect)
      cb(isCorrect, latter);
   }

   const handleConfirm = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if(e.key === 'Enter'){
         (e.target as HTMLInputElement).focus()
         const isCorrect = optionValue.toLocaleLowerCase() === latter?.sound;
         setIsHit(isCorrect)
         setOptionValue('')
         cb(isCorrect, latter);
      }
   }

   return (
      <div className={'container-quizlatter ' + col}>
         <span className='col-12' style={{fontSize: '82px', textAlign: 'center', color: isHit === true ? '#090' : isHit === false ? '#900' : isHit === null ? '#333' : '#333'}}>{latter?.latter}</span>

         {typeOptions === 'options' && options.length > 0 && (
            <div className='container-quizlatter-options col-12'>
               {options.map((option, index) => (
                  <div className='quizlatter-options-button col-6'>
                     <Button className='col-12' key={index} onClick={() => handleClick(option)} label={option.sound.toUpperCase()} />
                  </div>
               ))}
            </div>
         )}
         {typeOptions === 'text' && options.length > 0 && (
            <Input 
               type='text' 
               value={optionValue}
               handleChange={e => setOptionValue(e.target.value)}
               handleConfirm={handleConfirm}
               placeholder='Informe a pronúncia'
            />
         )}
      </div>
   )
}

export default Quiz
