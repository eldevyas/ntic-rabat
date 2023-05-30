import SideBar from "./web/SideBar";
import ConnectHeader from "./web/ConnectHeader";

export default function DesktopNavigation(props: any) {
    return (
        <div className="Connect">
            <SideBar />
            <div className="Content">
                <ConnectHeader />
                {props.children}
            </div>
        </div>
    );
}
