import { OB } from './modules-export'

class Ob implements OB {
    is(s: string): boolean {
        return false
    }
}
console.log(new Ob().is('ss'))

