import { Pipe, PipeTransform } from '@angular/core';
import { TemperatureValues } from '../enums/temperature.enum';

@Pipe({
  name: 'temperature',
})
export class TemperaturePipe implements PipeTransform {
  transform(value: number, tipoIn: TemperatureValues, tipoFin: TemperatureValues): unknown {

    let finalValue = 0

    if(tipoIn==tipoFin)
      return `${value}°${tipoIn}`
    if(tipoIn===TemperatureValues.C&&tipoFin==TemperatureValues.F)
      finalValue = (value * 9/5) + 32; 
    if(tipoIn==TemperatureValues.F&&tipoFin==TemperatureValues.C)
      finalValue = (value - 32) * 5/9;
    return `${finalValue}°${tipoFin}`
  }
}
