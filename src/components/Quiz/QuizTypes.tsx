export type HiraganaAction =
| { type: 'LOAD-LATTERS', payload: { latter: string; sound: string }[] | any }
| { type: 'LOAD-ALPHABET', payload: { latter: string; sound: string }[] | any }
| { type: 'UPDATE-ALPHABET'; payload: { latter: string; sound: string }}
| { type: 'UPDATE-CORRECT-LIST'; latter: string; sound: string }
| { type: 'UPDATE-INCORRECT-LIST'; latter: string; sound: string }
| { type: 'RESET' }
   