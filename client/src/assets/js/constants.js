import { getLang } from '@/assets/js/utils'

export const STORAGE_KEY = {
    interestedList:'interestedList',
    language: 'language',
    langCtryCode: 'langCtryCode'
}

export const USERACTION = {
    Collection: 'Collection',
    Like: 'Like',
    Share: 'Share',
    Visited: 'Visited',
    Comment: 'Comment'
}

/**
 *  AJAX DATA URI OBJECT
 */
getLang();
let preffix = 'http://10.131.119.138:8007/DigitalInnovShowRoom/Service/OData.xsodata/', suffix = null;
if (lang === 'zh') {
    suffix = '_zh?$format=json';
} else {
    suffix = '_en?$format=json';
}
export const DATA_URI = {
    interest: {
        l: preffix + 'view_industry' + suffix
    },
    project: {
        l: preffix + 'view_industry_app' + suffix,
        filter: {
            typeIndustry: "&$filter=type eq 'Industry'"
        }
    }
}

export const SEPARATOR = '@~@'
