import {Button, Tooltip, UncontrolledTooltip} from "reactstrap";
import {EXEC_STATE} from "./constants";
import { useState } from "react";

interface RunButtonProps {onRun: () => void, onCheck: () => void, running: string, loaded: boolean, showCheckButton?: boolean, runButtonDisabled: boolean}

export const RunButtons = ({onRun, onCheck, running, loaded, showCheckButton, runButtonDisabled}: RunButtonProps) => {
	const [tooltipOpen, setTooltipOpen] = useState(false);

	const toggle = () => {
		if (runButtonDisabled) {
			setTooltipOpen(!tooltipOpen);
		}
	}
	return <div className={"d-flex justify-content-center mb-3"}>
		<span id="run-button-span">
			<Button title={"Run code"} className={"run-button mx-2"} color={"secondary text-center"} onClick={onRun} disabled={!loaded || running === EXEC_STATE.CHECKING || running === EXEC_STATE.RUNNING || runButtonDisabled}>
				{
					<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#FFFFFF"
						className="bi bi-play-fill" viewBox="0 0 16 16">
						<path
							d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"/>
					</svg>
				}
			</Button>
		</span>

		<Tooltip placement="top" target="run-button-span" isOpen={tooltipOpen} toggle={toggle} delay={{"show":100,"hide":0}}>
			Complete the steps on the right first!
		</Tooltip>
		{showCheckButton && <Button title={"Test code"} className={"check-button mx-2"} color={"secondary text-center"} onClick={onCheck} disabled={!loaded || running === EXEC_STATE.RUNNING}>
			{running === EXEC_STATE.CHECKING ?
				<svg data-name="Layer 1" id="Layer_1" width="35" height="35" fill="#FFFFFF" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><rect height="298.98" rx="18.8" width="298.96" x="106.52" y="106.51"/></svg>
				:
				<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#FFFFFF" viewBox="0 0 30 30">
					<path d="M 11 4 A 1.0001 1.0001 0 1 0 11 6 L 11 12 L 11 13 L 11 14 L 4.4511719 22.734375 L 4.4511719 22.736328 A 2 2 0 0 0 4 24 A 2 2 0 0 0 6 26 L 15 26 L 24 26 A 2 2 0 0 0 26 24 A 2 2 0 0 0 25.548828 22.736328 A 2 2 0 0 0 25.548828 22.734375 L 19 14 L 19 13 L 19 12 L 19 6 A 1.0001 1.0001 0 1 0 19 4 L 11 4 z M 13 6 L 17 6 L 17 12 L 13 12 L 13 6 z M 14 14 C 14.552 14 15 14.448 15 15 C 15 15.552 14.552 16 14 16 C 13.448 16 13 15.552 13 15 C 13 14.448 13.448 14 14 14 z M 17.5 20 C 18.328 20 19 20.672 19 21.5 C 19 22.328 18.328 23 17.5 23 C 16.672 23 16 22.328 16 21.5 C 16 20.672 16.672 20 17.5 20 z"/>
				</svg>
			}
		</Button>}
	</div>
}