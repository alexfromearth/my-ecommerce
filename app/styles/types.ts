type IColorNamesWithoutWashington = 'podgorica' | 'moscow' | 'amsterdam' | 'vienna';
export type IColorNames = 'washington' | IColorNamesWithoutWashington;
type IColorShades = 'a' | 'b' | 'c' | 'd';

type IColor<T extends string = IColorShades> = {
  [key in T]: string;
} & {
  base: string;
};

export type IBaseColors = {
  [key in IColorNamesWithoutWashington]: IColor;
} & {
  washington: IColor<IColorShades | 'e' | 'f'>;
};
