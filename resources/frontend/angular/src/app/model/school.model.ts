export class School {

    constructor(
                public id?: number,
                public schoolname?: string,
                public schoolcodeExternal?: string,
                public schoolcodeInternal?: string,
                public baseURL?: string,
                public email?: string,
                public confirmationuid?: string,
                public confirmationuiddate?: string,
                public confirmed?: boolean,
                public confirmeddate?: string,
                public street?: string,
                public number?: string,
                public postalcode?: string,
                public city?: string,
                public country?: string,
                public phone?: string,
                public language?: string,
                public schoolyear_filter?: number
                ) {}
}