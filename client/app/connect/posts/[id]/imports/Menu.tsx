import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Icon } from "@iconify/react"
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import { useRouter } from 'next/navigation';
import * as Display from '@/services/displayAlert'



export default function LongMenu({ postId }: { postId: Number }) {
    const [open, setOpen] = React.useState<boolean>(false);
    const Router = useRouter()


    const { data }: any = useSession()
    const DeletePost = (postId: Number) => {
        axios.delete(`${process.env.SERVER_PUBLIC_API_URL}/posts/${postId}`
            , {
                headers: {
                    "Authorization": `Bearer ${data?.user?.token}`
                }
            }

        ).then((response) => {
            Display.pushSuccess("Post supprimé avec succès")
            Router.push("/connect")
        }
        )
            .catch((error) => {
                console.log(error);
            }
            );
    }
    const options = [
        { text: 'Modifier', icon: 'lucide:edit', Action: () => { console.log("Edit") } },
        { text: 'Supprimer', icon: 'fluent:delete-24-regular', Action: () => { setOpen(true) } }
    ];

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const menuOpen = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    const handleDialogClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={menuOpen ? 'long-menu' : undefined}
                aria-expanded={menuOpen ? 'true' : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button',
                }}
                anchorEl={anchorEl}
                open={menuOpen}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        width: 'fit-content',
                        padding: "0",
                    },
                }}
                sx={{
                    padding: "0",
                }}
            >
                {options.map((option, index: any) => (
                    <MenuItem key={index}
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "1rem",
                            justifyContent: "space-between",
                            width: "100%",
                        }}
                        onClick={() => {
                            handleClose
                            option.Action()
                        }}
                    >
                        <Icon icon={option.icon} />
                        {option.text}

                    </MenuItem>
                ))}
            </Menu>
            <Dialog
                open={open}
                onClose={handleDialogClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title"
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: "1rem",
                    }}
                >
                    <WarningRoundedIcon sx={{ color: "red" }} />
                    Confirmation
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Voulez vous vraiment supprimer ce post ?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleDialogClose}

                    >
                        Annuler
                    </Button>
                    <Button onClick={() => {

                        DeletePost(postId); handleDialogClose()
                        // Router.push("/connect/")
                    }}
                        variant="contained"
                        sx={{
                            backgroundColor: "red",
                            color: "white",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: "0.5rem",
                            "&:hover": {
                                backgroundColor: "red",
                            }
                        }}

                    >
                        <DeleteForeverIcon />
                        Supprimer
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
