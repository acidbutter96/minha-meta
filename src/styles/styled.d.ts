import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secondary: string;
            tertiary: string;
            quaternary: string;

            white: string;
            black: string;
            grey: string;
            grey2: string;

            success: string;
            info: string;
            warning: string;
        }
    }
}