import {STORAGE_KEY} from './constants'

/**
 * set localStorage
 */
export const setStore = (name, content) => {
    if (!name) return;
    if (typeof content !== 'string') {
        content = JSON.stringify(content);
    }
    window.localStorage.setItem(name, content);
}

/**
 * get localStorage
 */
export const getStore = name => {
    if (!name) return;
    return window.localStorage.getItem(name);
}



/****************************
 *  get Client Language     *
 ****************************/
export function getLang() {
    if (window.navigator.language) {
        window.lang = ((window.navigator.language).toLowerCase()).slice(0, 2);
    } else {
        alert("You need update your browser! The language has been set to English(en_US, default)");
        window.lang = 'en';
    }
}

const getBrowserLang = (defaultLangCtryCode='en-US') => (navigator.languages && navigator.languages.length > 0) ? navigator.languages[0] : (navigator.language || navigator.userLanguage /* IE */ || defaultLanguage);

export const getLanguage = (defaultLang) => {
	var lang_store = getStore(STORAGE_KEY.language);
	if(lang_store) {
		return lang_store;
	}
	var lang;
	try {
		lang = getBrowserLang(defaultLang)
		if (lang.length > 3) {
			lang = lang.substring(0, 2);
		}
	}
	catch (e) {
		lang = defaultLanguage;
	}
	setStore(STORAGE_KEY.language,lang);
	return lang
}

export const getLangCtryCode = (defaultLangCtryCode) => {
	var langCtryCode_store = getStore(STORAGE_KEY.langCtryCode);
	if(langCtryCode_store) {
		return langCtryCode_store;
	}
	var langCtryCode;
	langCtryCode = getBrowserLang(defaultLangCtryCode)
	setStore(STORAGE_KEY.langCtryCode,langCtryCode);
	return langCtryCode
}
