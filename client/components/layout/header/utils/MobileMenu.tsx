import React, { useState, useRef, useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";
import Image from "next/image";
import { Grid, Avatar, Dropdown, Button } from "@nextui-org/react";
import { Bars2Icon } from "@heroicons/react/24/outline";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useRouter } from "next/router";
import { Links } from "./Links/Links";

export default function MobileMenu(props: any) {
    return (
        <Dropdown placement="bottom-right">
            <Dropdown.Trigger>
                <Button auto flat icon={<Bars2Icon />} />
            </Dropdown.Trigger>
            <Dropdown.Menu aria-label="Static Actions">
                {Links.map((Link) => {
                    return (
                        <Dropdown.Item key={Link.title as string}>
                            {Link.title}
                        </Dropdown.Item>
                    );
                })}
            </Dropdown.Menu>
        </Dropdown>
    );
}
