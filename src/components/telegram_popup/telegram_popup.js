import "./telegram_popup.scss";
import tgpng from "../../img/tg.png";

const TelegramPopup = () => {
	return (
		<div className="telegram_popup">
			<a href="https://t.me/sng_twitch">
				<img src={tgpng} alt="tg" width="auto" height={200} />
			</a>
		</div>
	);
};

export default TelegramPopup;
