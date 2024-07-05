/** @type {import('tailwindcss').Config} */
import remToPxPlugin from 'tailwindcss-rem-to-px';
export default {
    content: [
        "./**/*.{js,json,liquid,css}",
    ],
    theme: {
        extend: {
            fontFamily: {
                body: ['"Lateral Standard", sans-serif'],
                heading: ['"Pound Campton Book",sans-serif'],
                fontpitch: ['"Pitch",sans-serif'],
                fonticon: ["'Font Awesome 5 Pro'"],
            },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                black: '#000000',
                butter_yellow: '#FFDC5B',
                light_yellow1: '#FFFAED',
                light_yellow2: '#FFEBA2',
                vanilla_cream: '#FCE7D2',
                frosting_white: '#FFFFFF',              
            },
            flex: {
                auto: '1 1 auto',
                initial: '0 1 auto',
                inherit: 'inherit',
                none: 'none',
            },
            boxShadow: {
                'shadow-xl': '0px 2px 4px 0px rgba(67, 71, 41, 0.3);',
            },
            letterSpacing: {
                normal: '0',
                global: '0.64px',
                wide:  '0.02em',
              },
            container: {
                center: true,
                padding: '25px',
            },
            zIndex: {
                '-1': '-1',
                0: 0,
                1: 1,
                2: 2,
                9: 9,
                11: 11,
                12: 12,
                98: 98,
                99: 99,
                100: 100,
                900: 900,
                999: 999,
                9999: 9999,
            },
            padding: {
                0: '0px',
                1: '1px',
                2: '2px',
                4: '4px',
                5: '5px',
                6: '6px',
                7: '7px',
                8: '8px',
                9: '9px',
                10: '10px',
                11: '11px',
                12: '12px',
                13: '13px',
                14: '14px',
                15: '15px',
                16: '16px',
                20: '20px',
                25: '25px',
                28: '28px',
                30: '30px',
                32: '32px',
                35: '35px',
                40: '40px',
                50: '50px',
                55: '55px',
                60: '60px',
                65: '65px',
                70: '70px',
                75: '75px',
                80: '80px',
                100: '100px',
                "56.25_per": '56.25%',
                "75_per": '75%',
                "100_per": '100%',
            },
            margin: {
                0: '0px',
                2: '2px',
                3: '3px',
                4: '4px',
                5: '5px',
                6: '6px',
                8: '8px',
                9: '9px',
                10: '10px',
                13: '13px',
                14: '14px',
                15: '15px',
                16: '16px',
                20: '20px',
                25: '25px',
                28: '28px',
                30: '30px',
                35: '35px',
                40: '40px',
                46: '40px',
                50: '50px',
                55: '55px',
                60: '60px',
                65: '65px',
                70: '70px',
                75: '75px',
                80: '80px',
                85: '85px',
                90: '90px',
                100: '100px',
            },
            fontSize: {
                8: '8px',
                9: '9px',
                10: '10px',
                12: '12px',
                14: '14px',
                15: '15px',
                16: '16px',
                18: '18px',
                20: '20px',
                22: '22px',
                24: '24px',
                26: '26px',
                28: '28px',
                30: '30px',
                32: '32px',
                36: '36px',
                38: '38px',
                42: '42px',
                40: '40px',
                44: '44px',
                48: '48px',
                50: '50px',
                60: '64px',
            },
            lineHeight: {
                0: '0px',
                9: '9px',
                14: '14px',
                15: '15px',
                18: '18px',
                20: '20px',
                22: '22px',
                24: '24px',
                25: '25px',
                26: '26px',
                28: '28px',
                30: '30px',
                32: '32px',
                36: '36px',
                38: '38px',
                40: '40px',
                46: '46px',
                48: '48px',
                55: '55px',
                60: '60px',
                66: '66px',
                74: '74px',
                76: '76px',
                80: '80px',
            },
            gap: {
                5: '5px',
                10: '10px',
                14: '14px',
                15: '15px',
                16: '16px',
                18: '18px',
                20: '20px',
                25: '25px',
                28: '28px',
                30: '30px',
                35: '35px',
                40: '40px',
                50: '50px',
                55: '55px',
                60: '60px',
                65: '65px',
                70: '70px',
                75: '75px',
                80: '80px',
                85: '85px',
                90: '90px',
                100: '100px',
            },
            width: {
                1: '1px',
                2: '2px',
                3: '3px',
                4: '4px',
                8: '8px',
                9: '9px',
                10: '10px',
                12: '12px',
                15: '15px',
                20: '20px',
                40: '40px',
            },
            height: {
                1: '1px',
                2: '2px',
                3: '3px',
                4: '4px',
                7: '7px',
                8: '8px',
                10: '10px',
                12: '12px',
                15: '15px',
                20: '20px',
                40: '40px',
            },
            minWidth: {
                1: '1px',
            },
            maxWidth: {
                1: '1px',
            },
            minHeight: {
                auto: 'auto',
            },
            maxHeight: {
                auto: 'auto',
            },
            inset: {
                0: '0px',
                1: '1px',
                2: '2px',
                3: '3px',
                4: '4px',
                5: '5px',
                7: '7px',
                8: '8px',
                9: '9px',
                10: '10px',
                20: '20px',
                25: '25px',
                40: '40px',
                55: '55px',
                60: '60px',
                70: '70px',
                90: '70px',
                100: '100px',
                "100_per": '100%',
            },
            borderWidth: {
                DEFAULT: '1px',
                0.5: '0.5px',
                1: '1px',
                2: '2px',
                3: '3px',
                4: '4px',
                5: '5px',
                0: '0px',
            },
            borderRadius: {
                DEFAULT: '1px',
                0: '0px',
                1: '1px',
                2: '2px',
                3: '3px',
                4: '4px',
                5: '5px',
                10: '10px',
                24: '24px',
               
            },
            textUnderlineOffset: {
                DEFAULT: '1px',
                1: '1px',
                2: '2px',
                3: '3px',
                4: '4px',
                5: '5px',
            },
            ransitionProperty: {
                'height': 'height',
            },
            transitionDelay: {
                '1': '1ms',
                '2': '0.2s',
            },
            outline: {
                none: 'none',
            },
              textIndent: {
                '-9999': '-9999px',
            },
            backgroundImage: (theme) => ({
                none: "none",
                bg_gradient_white:"linear-gradient(90deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0) 50%);",
            }),
            backgroundPosition: {
                'right-center3': '100% 51%',
                'right-center': '95% 51%',
            },
            screens: {
                // Mobile First
                xsscreen: { 'max': '320px' },
                xxsscreen1: { 'max': '374px' },
                xsscreen1: { 'min': '375px' },
                xsscreen2: { 'max': '400px' },
                xsscreen3: { 'min': '401px' },
                smscreen: { 'max': '575px' },
                smscreen1: { 'min': '576px' },
                smscreen2: { 'max': '639px' },
                // Tablet First
                mdscreen5: { 'max': '749px' },
                mdscreen4: { 'min': '750px' },
                mdscreen: { 'max': '767px' },
                mdscreen1: { 'max': '989px' },
                mdscreen3: { 'max': '991px' },
                mdscreen2: { 'min': '990px' },
                lgscreen: { 'max': '1023px' },
                xlscreen: { 'max': '1199px' },
                xlscreen1: { 'min': '1200px' },
                xlscreen2: { 'max': '1279px' },
                // Desktop First
                xl: { 'min': '1280px' },
                small_desktop1: { 'max': '1365px' },
                small_desktop: { 'min': '1366px' },
                desktop: { 'min': '1440px' },
                large_desktop: { 'min': '1512px' },
                midlarge_desktop: { 'min': '1600px' },
                extlarge_desktop: { 'min': '1921px' },
            }
        },
      },
    plugins: [
        remToPxPlugin({
            baseFontSize: 16,
        }),
        function ({ addComponents }) {
            addComponents({
                '.container': {
                    maxWidth: '100%',
                    '@screen sm': {
                        maxWidth: '640px',
                    },
                    '@screen md': {
                        maxWidth: '768px',
                    },
                    '@screen lg': {
                        maxWidth: '940px',
                    },
                    '@screen xl': {
                        maxWidth: '1240px',
                    },
                    '@screen 2xl': {
                        maxWidth: '1512px',
                    },
                }
            })
        }
    ],
}