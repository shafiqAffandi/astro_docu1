const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export type Sidebar = Record<
	typeof KNOWN_LANGUAGE_CODES[number],
	NavSubMenuType
>;

export type NavSubMenuType = Record<string, { text: string; link: string }[]>;