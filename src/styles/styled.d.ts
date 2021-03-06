import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            background: string;
            secundary: string;
            terciary: string;
            
            text: string;
        }
    }
}