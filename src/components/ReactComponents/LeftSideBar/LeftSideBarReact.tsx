import React from "react";
import { getLanguageFromURL } from '../../../languages';
import { SIDEBAR } from "../../../sidebar";
import './LeftSideBarReact.css';
import pkg from 'react-collapse';
import { Utils } from "../../../utils/utils";
import { SIDEBAR_OPTION } from "../../../config";

type Props = {
	currentPage: string;
	pathName: string | undefined;
};

const setMenuState = (menuState: Array<boolean>) => {
	const activeId = Utils.GetSessionStorage("act-menu");
	if (activeId != null) menuState[parseInt(activeId)] = true;
	return menuState;
}

const itemList = (props: Props) => {
	const { Collapse } = pkg;
	const { currentPage, pathName } = props;
	const currentPageMatch = currentPage.endsWith('/')
		? currentPage.slice(1, -1)
		: currentPage.slice(1);
	const langCode = getLanguageFromURL(currentPage);
	const sidebar = SIDEBAR[langCode];
	let menuState: Array<boolean> = new Array(Object.entries(sidebar).length).fill(true);;
	if (!SIDEBAR_OPTION) {
		menuState = new Array(Object.entries(sidebar).length).fill(false);
	}
	menuState = setMenuState(menuState);
	let [isOpen, setIsOpen] = React.useState<boolean[]>(menuState);

	let onToggle = (id: number) => setIsOpen(prevState => {
		return prevState.map((item, idx) => {
			if (idx == id) {
				if (!SIDEBAR_OPTION) {
					if(!item) {
						Utils.SetSessionStorage("act-menu", id.toString());
					}
					else {
						Utils.RemoveSessionStorage("act-menu");
					}
				}
				return !item;
			}
			if (!SIDEBAR_OPTION) return false;
			return item;
		})
	});

	return Object.entries(sidebar).map(([key, value], index) => {
		return (
			<div className="flex-container">
				<li key={index} className="flex-left">
					<div className="nav-group">
						<ul className="nav-link-parent" onClick={() => onToggle(index)}>
							<a className="menu-title">{key}</a>
						</ul>
						<Collapse isOpened={isOpen[index]}>
							<ul>
								{value.map((item, i) => {
									const url = pathName + item.link;
									return (
										<li key={i} className="nav-link">
											<a className="submenu-title" href={url} aria-current={currentPageMatch === item.link ? 'page' : false}>
												{item.text}
											</a>
										</li>
									);
								})}
							</ul>
						</Collapse>
					</div>
				</li>
			</div>
		)
	});
}

export default function LeftSideBarReact(props: Props) {
	const _itemList = itemList(props);

	return (
		<nav aria-labelledby="grid-left">
			<ul className="nav-groups" key="left-sidebar">
				{_itemList}
			</ul>
		</nav>
	)
}