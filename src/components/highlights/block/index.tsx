interface BlockProps {
    img: string;
}

export default function Block({img}:BlockProps) {
    return (
        <div className={'lg:w-[400px] lg:h-[550px] xs:w-[200px] xs:h-[300px] bg-black rounded-[5px]'}>
            {img}
        </div>
    )
}