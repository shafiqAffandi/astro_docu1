import type { Sidebar } from "./types/SideBar.type";

const BASE_MENU_PATH = import.meta.env.ASTRO_BASE_MENU_PATH;
export const SIDEBAR: Sidebar = {
	en: {
		'Personal Setup': [
			{text: 'Frontend - Development Setup', link: BASE_MENU_PATH + 'en/setup/frontend'},
			{text: 'Backend - Development Setup', link: BASE_MENU_PATH + 'en/setup/backend'},
			{text: 'Database - Development Setup', link: BASE_MENU_PATH + 'en/setup/database'},
			{text: 'Other Tools', link: BASE_MENU_PATH + 'en/setup/others'},
		],
		'Getting Started': [
			{text: 'Frontend - First Project', link: BASE_MENU_PATH + 'en/development/frontend-first-project'},
			{text: 'Backend - First Project', link: BASE_MENU_PATH + 'en/development/backend-first-project'},
			{text: 'ESLint Integration ', link: BASE_MENU_PATH + 'en/development/linter-frontend'},
		],
		'Best Practice': [
			{ text: 'Intro To FE Standarization', link: BASE_MENU_PATH + 'en/best-practice/general-rules-fe' },
			{ text: 'Git Commit Message', link: BASE_MENU_PATH + 'en/best-practice/commit-best-practice' },
		],
		// 'RefOfficeController': [
		// 	{ text: 'GetRefOfficeByOfficeCode', link: BASE_MENU_PATH + 'en/GetRefOfficeByOfficeCode' },
		// ],
    'Forms': [
      { text: 'Form Handling', link: BASE_MENU_PATH + 'en/forms/form-handling' },
      { text: 'Form - HTML Integration', link: BASE_MENU_PATH + 'en/forms/form-html-integration' },
      { text: 'Form Array', link: BASE_MENU_PATH + 'en/forms/form-array' },
    ],
	},
};