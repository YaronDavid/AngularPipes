import { TemperatureValues } from '../enums/temperature.enum';
import { TemperaturePipe } from './temperature.pipe';

describe('TemperaturePipe', () => {
  it('create an instance', () => {
    const pipe = new TemperaturePipe();
    expect(pipe).toBeTruthy();
  });

  it("Deberia retornar grados C", ()=>{
    const pipe = new TemperaturePipe();
    expect(pipe.transform(53.6, TemperatureValues.F, TemperatureValues.C)).toEqual('12°C')
    expect(pipe.transform(12, TemperatureValues.C, TemperatureValues.C)).toEqual('12°C')

  }),

  it("Deberia retornar grados C", ()=>{
    const pipe = new TemperaturePipe();
    expect(pipe.transform(12, TemperatureValues.C, TemperatureValues.F)).toEqual('53.6°F')
    expect(pipe.transform(12, TemperatureValues.F, TemperatureValues.F)).toEqual('12°F')
  })

});
