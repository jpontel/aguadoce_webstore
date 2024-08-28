interface BlockProps {
    img: string;
}

export default function Block({img}:BlockProps) {
    return (
        <div className={'flex lg:w-[400px] lg:h-[550px] xs:w-full xs:h-[150px] bg-black rounded-[5px]'}>
            <img src={img} alt="Imagem do produto" className={'w-full h-full object-cover'} />
        </div>
    )
}