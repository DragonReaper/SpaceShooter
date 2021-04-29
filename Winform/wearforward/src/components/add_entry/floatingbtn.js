import React, {useState} from "react"
import { FloatingButton, Item } from "react-floating-button";
import HangerIcon from '../../assets/images/clothes-hanger.png'
function FloatingBtn(){
	return(
		<div>
			<FloatingButton>
				<Item
					imgSrc={HangerIcon}
					    onClick={() => {
    }}
				/>
			</FloatingButton>
		</div>
	);

}

export default FloatingBtn;
