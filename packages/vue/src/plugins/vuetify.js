import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#5D576B',
                secondary: '#D496A7',
                accent: '#F1DEDE',
                error: '#FE938C',
                success: '#6CD4FF'
            },
        },
    },
});
