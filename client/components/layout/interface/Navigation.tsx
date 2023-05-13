import React, { ReactNode } from "react";
import SideBar from "./bin/web/SideBar";
import DesktopNavigation from "./bin/DesktopNavigation";
import MobileNavigation from "./bin/MobileNavigation";
interface NavigationProps {
    children: ReactNode;
}
interface NavigationState {
    isDesktop: boolean;
}
export default class Navigation extends React.Component<NavigationProps, NavigationState> {
    constructor(props: any) {

        super(props);
        this.state = {
            isDesktop: false,
        };
        this.updatePredicate = this.updatePredicate.bind(this);
    }
    componentDidMount() {
        this.updatePredicate();
        window.addEventListener("resize", this.updatePredicate);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updatePredicate);
    }

    updatePredicate() {
        this.setState({ isDesktop: window.innerWidth > 1000 });
    }

    render() {
        const isDesktop = this.state.isDesktop;

        return (
            <>
                {isDesktop ? (
                    <DesktopNavigation>{this.props.children}</DesktopNavigation>
                ) : (
                    <MobileNavigation>{this.props.children}</MobileNavigation>
                )}
            </>
        );
    }
}
