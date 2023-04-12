import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"darkmode"
})
export class DarkModePipe implements PipeTransform{
    transform(value: boolean) {

        if(value)
            return "bg-dark text-white"
        return "bg-white text-dark"
    }
}