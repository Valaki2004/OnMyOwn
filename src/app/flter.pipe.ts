import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flter'
})
export class FlterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
