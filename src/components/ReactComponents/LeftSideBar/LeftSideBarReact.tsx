import React from "react";
import { getLanguageFromURL } from '../../../languages';
import { SIDEBAR } from '../../../config';
import useCollapse from 'react-collapsed';
import './LeftSideBarReact.css';
import { Collapse } from 'react-collapse';
import { Utils } from "../../../utils/utils";

type Props = {
	currentPage: string;
	pathName: string | undefined;
};

const setMenuState = (menuState: Array<boolean>) => {
	const activeId = Utils.GetSessionStorage("act-menu");
	if(activeId != null) menuState[parseInt(activeId)] = true;
	return menuState;
}

const itemList = (props: Props) => {
	const { currentPage, pathName } = props;
	const currentPageMatch = currentPage.endsWith('/')
		? currentPage.slice(1, -1)
		: currentPage.slice(1);
	const langCode = getLanguageFromURL(currentPage);
	const sidebar = SIDEBAR[langCode];
	let menuState: Array<boolean> = new Array(Object.entries(sidebar).length).fill(false);
	menuState = setMenuState(menuState);
	let [isOpen, setIsOpen] = React.useState<boolean[]>(menuState);

	let onToggle = (id: number) => setIsOpen(prevState => {
		console.log(isOpen[id]);
		return prevState.map((item, idx) => {
			if (idx == id) {
				if(!item) {
					Utils.SetSessionStorage("act-menu", id.toString());
				}
				else {
					Utils.RemoveSessionStorage("act-menu");
				}
				
				return !item
			}
			return false
		})
	});

	return Object.entries(sidebar).map(([key, value], index) => {
		return (
			<div className="flex-container">
				<li key={index} className="flex-left">
					<div className="nav-group">
						<ul className="nav-link-parent" onClick={() => onToggle(index)}>
							<a>{key}</a>
						</ul>
						<Collapse isOpened={isOpen[index]}>
							<ul>
								{value.map((item, i) => {
									const url = pathName + item.link;
									return (
										<li key={i} className="nav-link">
											<a href={url} aria-current={currentPageMatch === item.link ? 'page' : false}>
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