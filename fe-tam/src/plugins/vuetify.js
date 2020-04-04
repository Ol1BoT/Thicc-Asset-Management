import Vue from 'vue';
import Vuetify, { colors } from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                // primary: colors.pink.accent4,
                // background: colors.purple.darken4,
                primary: '#F6019D',
                accent: "#920075",
                secondary: '#023788',
                error: '#D40078',
                background: '#650D89',

            }
        }
    }
});
