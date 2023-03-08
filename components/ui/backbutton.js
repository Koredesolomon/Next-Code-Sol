import { Icon } from '@iconify/react';
import Link from 'next/link';

function BackButton() {
    return (
        <Link href={'/questions'} className="flex flex-row p-10 gap-2 items-center w-fit">
            <Icon icon="material-symbols:line-start-arrow-rounded" vFlip={true} fontSize={40} className=" rounded-full bg-[#e9d5ff] p-2"/>
            <p className="tetext-[#5b21b6]xt-purple-700">Back to All Questions</p>
        </Link>
    )
}
export default BackButton;