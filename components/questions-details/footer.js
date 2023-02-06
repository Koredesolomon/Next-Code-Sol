import { Icon } from '@iconify/react';

function Footer() {
    return(
        <div className="flex flex-row justify-around p-10 bg-[hsl(210,8%,15%)] h-0">
                <h2 className="text-white">CodeSol hub</h2>
                <div className='flex flex-row'><Icon icon="ph:copyright-thin" fontSize={22} className='text-green'/>
                <div className='flex flex-row gap-2 text-white'>2022-2023
                <div>Buildwith Korex</div></div></div>
        </div>
    )
}
export default Footer;