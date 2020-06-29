import { intervalToObj} from"./interval"

describe('Interval', ()=>{
    it('return obect for 0 second', () =>{
        const o = intervalToObj(0)
        expect(o).toEqual({
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        })
    })
})