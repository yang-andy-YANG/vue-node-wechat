import Vue from 'vue'
import VueI18n from 'vue-i18n'
import {getLanguage} from '@/assets/js/utils'
import en from './en'
import zh from './zh'

Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: getLanguage('en'),  
    messages: {		
        'en': en,
        'zh': zh
    }
})

export default i18n