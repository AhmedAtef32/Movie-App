import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'term',
})
export class TermPipe implements PipeTransform {
  transform(value: string, numberOfCharacters: number): string {
    return value.slice(0, numberOfCharacters);
  }
}
