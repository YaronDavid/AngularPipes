import { DarkModePipe } from "./dark-mode.pipe"

describe("DarkModePipe", ()=>{

    it("deberia retornar DarkMode si tiene true", ()=>{
        const pipe = new DarkModePipe()

        expect(pipe.transform(true)).toEqual("bg-dark text-white")
    })

    it("deberia retornar LightMode si tiene false", ()=>{
        const pipe = new DarkModePipe()

        expect(pipe.transform(false)).toEqual("bg-white text-dark")
    })

})