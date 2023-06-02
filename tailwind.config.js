import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './vendor/laravel/jetstream/**/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
            colors:{
                'blue': '#1d9bf0',
                'yellow': '#ffd400',
                'pink': '#f91880',
                'purple': '#7856ff',
                'orange': '#ff7a00',
                'green': '#00ba7c',
                'dark': '#15202b',
                'superdark': '#000000'
            }
        },
    },

    plugins: [forms, typography],
};
