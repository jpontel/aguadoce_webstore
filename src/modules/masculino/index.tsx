import GenericProductPage from "../../components/generic-product-page";

export default function Masculino() {
    return(
        <div>
            <GenericProductPage categories={['Cintos', 'Gola-Polo', 'Camisa', 'Básicas', 'Moletom']} title={'Masculino'} action={() => {}}/>
        </div>
    )
}