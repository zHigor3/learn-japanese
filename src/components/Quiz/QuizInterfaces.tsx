/* Hiragana */
export interface HiraganaState {
   latters: { latter: string; sound: string }[]
   alphabet: { latter: string; sound: string }[]
   correctList: { latter: string; sound: string }[]
   incorrectList: { latter: string; sound: string }[]
}

/* ShowLatter */
export interface QuizLatterProps {
   alphabet: Latter[]
   typeOptions: 'text' | 'options'
   cb: (answer: boolean, result: Latter | null) => void
   col?: string
}

export interface Latter {
   latter: string
   sound: string
}
