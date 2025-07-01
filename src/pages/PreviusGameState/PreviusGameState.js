import React from "react";
import "./PreviusGameState.scss";

import invoker1 from "../../img/invoker2.gif";
import quas from "../../img/invoker_quas.png";
import wex from "../../img/invoker_wex.png";
import exort from "../../img/invoker_exort.png";
import invoke from "../../img/invoker_invoke.png";
import nospell from "../../img/no_spell.png";
import old_quas from "../../img/icons_old_invoker/quas.jpg";
import old_wex from "../../img/icons_old_invoker/wex.jpg";
import old_exort from "../../img/icons_old_invoker/exort.jpg";
import old_invoke from "../../img/icons_old_invoker/invoke.png";
import TelegramPopup from "../../components/telegram_popup/telegram_popup";

const PreviusGameState = (props) => {
	const [visible, setVisible] = React.useState(false);

	React.useEffect(() => {
		setTimeout(() => {
			setVisible(true);
		}, 5000);
	});
	return (
		<div className="mainSection">
			<h1>Invoker Game by ozzy</h1>
			<div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
				<button
					className="key__binds__button"
					style={
						props.mode === "new"
							? { borderStyle: "inset" }
							: { borderStyle: "outset" }
					}
					onClick={() => {
						props.setMode("new");
					}}
				>
					New
				</button>
				<button
					className="key__binds__button"
					style={
						props.mode === "old"
							? { borderStyle: "inset" }
							: { borderStyle: "outset" }
					}
					onClick={() => {
						props.setMode("old");
					}}
				>
					Old
				</button>
			</div>

			<div
				style={{
					position: "relative",
					display: "block",
					marginLeft: "auto",
					marginRight: "auto"
				}}
			>
				{visible ? (
					<TelegramPopup />
				) : (
					<img
						src={invoker1}
						alt="invoker"
						className="img"
						style={{
							border: "5px solid #1d1c1c",
							borderStyle: "groove",
							width: "150px",
							height: "150px"
						}}
					/>
				)}
			</div>

			<button className="button" onClick={props.startGame}>
				Start Game
			</button>
			<ul className="window">
				<li className="circle"></li>
				<li className="circle"></li>
				<li className="circle"></li>
			</ul>
			<ul className="spells__group">
				<li className="square">
					<img src={props.mode === "new" ? quas : old_quas} alt="quas"></img>
					<span>{String.fromCharCode(props.keyQuas)}</span>
				</li>
				<li className="square">
					<img src={props.mode === "new" ? wex : old_wex} alt="wex"></img>
					<span>{String.fromCharCode(props.keyWex)}</span>
				</li>
				<li className="square">
					<img src={props.mode === "new" ? exort : old_exort} alt="exort"></img>
					<span>{String.fromCharCode(props.keyExort)}</span>
				</li>
				<li className="square">
					<img src={nospell} alt="spell1"></img>
					<span>D</span>
				</li>
				<li className="square">
					<img src={nospell} alt="spell2"></img>
					<span>F</span>
				</li>
				<li className="square">
					<img
						src={props.mode === "new" ? invoke : old_invoke}
						alt="invoke"
					></img>
					<span>{String.fromCharCode(props.keyInvoke)}</span>
				</li>
			</ul>
		</div>
	);
};

export default PreviusGameState;
