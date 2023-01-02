import React from 'react'
import { DefaultButton, IconButton } from '../../core/button'
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';
import { useRouter } from 'next/router';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
const InscriptionForm = () => {
    const Router = useRouter();
    return (
        <div className='InscriptionForm'>
            <div className='SignupForm'>
                <div className='Title'>
                    <h3>Inscrivez-vous à  <span>NTIC Rabat</span></h3>
                    <p>Vous ne pouvez vous inscrire qu'avec l&apos;e-mail fourni par l&apos;administration pour vous, celui que vous utilisez pour vous connecter à Teams.</p>
                </div>
                <hr></hr>
                <form action="" method='POST'>
                    <div className='FormControl'>
                        <IconButton bgColor="Blue">
                            <AccountBoxIcon />
                        </IconButton>
                        <input type="text" name="nom" placeholder='Nom Complet' />
                    </div>
                    <div className='FormControl'>
                        <IconButton bgColor="Blue">
                            <EmailIcon />
                        </IconButton>
                        <input type="text" name="email" placeholder='E-mail' />
                    </div>
                    <div className='FormControl'>
                        <IconButton bgColor="Blue">
                            <LockIcon />
                        </IconButton>
                        <input type="password" name="password" placeholder='Mot de passe' />
                    </div>
                    <div className='FormControl'>
                        <IconButton bgColor="Blue">
                            <LockIcon />
                        </IconButton>
                        <input type="password" name="repeatPassword" placeholder='Repeter le mot de passe' />
                    </div>


                    <DefaultButton >
                        Se connecter
                    </DefaultButton>
                    <div className='SwitchLink'>
                        <p>Vous avez déjà un compte ? <span onClick={() => Router.push('/connexion')}>Connectez-vous.</span></p>

                    </div>
                </form>
            </div >
        </div>
    )
}

export default InscriptionForm

